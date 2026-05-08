import React, { useState, useEffect, useMemo } from "react";
import {
  Send,
  Users,
  Building2,
  Globe,
  Check,
  Lock,
  Loader2,
} from "lucide-react";
import { api } from "../api";

const Transfer = ({ user }) => {
  const [accounts, setAccounts] = useState([]);
  const [awcCode, setAwcCode] = useState("");
  const [enteredAwc, setEnteredAwc] = useState("");
  const [showAwcModal, setShowAwcModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [awcError, setAwcError] = useState("");

  const [transferData, setTransferData] = useState({
    transferType: "swift",
    internal: { fromAccountId: "", toAccount: "" },
    swift: {
      fromAccountId: "",
      beneficiaryName: "",
      beneficiaryIban: "",
      swiftCode: "",
      beneficiaryAddress: "",
    },
    sepa: {
      fromAccountId: "",
      beneficiaryName: "",
      beneficiaryIban: "",
      reference: "",
    },
    crypto: {
      fromAccountId: "",
      currency: "BTC",
      toAddress: "",
      amount: "",
      networkFee: "",
    },
    common: { amount: "", description: "" },
  });

  const activeAccount = useMemo(() => {
    const currentId = transferData[transferData.transferType].fromAccountId;
    return accounts.find((acc) => acc._id === currentId);
  }, [accounts, transferData]);

  // --- Validation Logic ---
  const isFormValid = useMemo(() => {
    const { transferType, common, internal, swift, sepa, crypto } =
      transferData;
    const amountToTransfer =
      transferType === "crypto" ? Number(crypto.amount) : Number(common.amount);

    // 1. Basic field checks
    if (!amountToTransfer || amountToTransfer <= 0 || !common.description)
      return false;

    // 2. Balance check: Don't allow if amount exceeds balance
    if (activeAccount && amountToTransfer > activeAccount.balance) return false;
    switch (transferType) {
      case "internal":
        return !!(internal.fromAccountId && internal.toAccount);
      case "swift":
        return !!(
          swift.fromAccountId &&
          swift.beneficiaryName &&
          swift.beneficiaryIban &&
          swift.swiftCode &&
          swift.beneficiaryAddress
        );
      case "sepa":
        return !!(
          sepa.fromAccountId &&
          sepa.beneficiaryName &&
          sepa.beneficiaryIban
        );
      case "crypto":
        // Note: Crypto uses crypto.amount instead of common.amount in your original state
        return !!(crypto.fromAccountId && crypto.toAddress && crypto.amount);
      default:
        return false;
    }
  }, [transferData]);

  useEffect(() => {
    fetchAccounts();
    fetchAwcCode();
  }, []);

  const fetchAccounts = async () => {
    try {
      const data = await api.get("/accounts");
      setAccounts(data);
      if (data.length > 0) {
        const firstId = data[0]._id;
        setTransferData((prev) => ({
          ...prev,
          internal: { ...prev.internal, fromAccountId: firstId },
          swift: { ...prev.swift, fromAccountId: firstId },
          sepa: { ...prev.sepa, fromAccountId: firstId },
          crypto: { ...prev.crypto, fromAccountId: firstId },
        }));
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const fetchAwcCode = async () => {
    try {
      const data = await api.get("/auth/me");
      setAwcCode(data.awcCode);
    } catch (error) {
      console.error("Error fetching AWC code:", error);
    }
  };

  const handleChange = (section, field, value) => {
    setTransferData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setShowAwcModal(true);
    }, 2500);
  };

  const confirmTransfer = async () => {
    if (enteredAwc !== awcCode) {
      setAwcError("Invalid AWC code. Please try again.");
      return;
    }

    setAwcError("");
    setLoading(true);

    const type = transferData.transferType;
    const payload = {
      transferType: type,
      ...transferData.common,
      ...transferData[type],
    };

    // Mapping specific fields to generic toAccount for backend
    if (type === "swift")
      payload.toAccount = transferData.swift.beneficiaryIban;
    if (type === "sepa") payload.toAccount = transferData.sepa.beneficiaryIban;
    if (type === "crypto") {
      payload.toAccount = transferData.crypto.toAddress;
      payload.amount = transferData.crypto.amount; // Ensure crypto amount is used
    }

    try {
      await api.post("/transactions/transfer", payload);
      setSuccess(true);
      await fetchAccounts();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setAwcError(error.message || "Transfer failed.");
    } finally {
      setLoading(false);
      setShowAwcModal(false);
      setEnteredAwc("");
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto mt-10 animate-in fade-in zoom-in duration-300">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transfer Sent!
          </h2>
          <p className="text-gray-500 mb-8">
            Your transaction is being processed and will reflect shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Make Another Transfer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 py-8">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Transfer Funds
        </h2>
        <p className="text-gray-500 mt-1">
          Securely move assets across your accounts and global networks.
        </p>
      </div>

      {/* Modern Processing Overlay */}
      {processing && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-[100] animate-in fade-in duration-300">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
              <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-transparent animate-pulse" />
            </div>
            <p className="mt-6 text-xl font-bold text-gray-900">
              Verifying Transaction
            </p>
            <p className="text-gray-500">
              Securing your connection to the banking network...
            </p>
          </div>
        </div>
      )}

      {/* AWC Modal */}
      {showAwcModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Security Verification
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              To complete this transfer, please enter your{" "}
              <span className="font-bold text-gray-900">
                AWC (Account Withdrawal Code)
              </span>
              .
            </p>

            <input
              type="password"
              value={enteredAwc}
              onChange={(e) => setEnteredAwc(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl mb-2 focus:border-blue-500 outline-none transition-all text-center text-2xl tracking-[0.5em]"
            />
            {awcError && (
              <p className="text-red-500 text-sm mb-4 font-medium">
                {awcError}
              </p>
            )}

            <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg mb-6">
              <p className="text-xs text-amber-800">
                Don't have a code? Contact your account manager for assistance.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowAwcModal(false);
                  setEnteredAwc("");
                  setAwcError("");
                }}
                className="flex-1 px-4 py-3 text-gray-600 font-semibold hover:bg-gray-50 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmTransfer}
                disabled={loading || !enteredAwc}
                className="flex-[2] px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 disabled:opacity-50 shadow-lg shadow-blue-100"
              >
                {loading ? "Authorizing..." : "Confirm Transfer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-100">
          {/* Transfer Type Grid */}
          <div className="p-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
              1. Select Channel
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                // { key: "internal", label: "Internal", icon: Users },
                { key: "swift", label: "SWIFT", icon: Building2 },
                // { key: "sepa", label: "SEPA", icon: Globe },
                // { key: "crypto", label: "Crypto", icon: Globe },
              ].map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() =>
                    setTransferData((prev) => ({
                      ...prev,
                      transferType: t.key,
                    }))
                  }
                  className={`relative p-4 rounded-xl border-2 transition-all flex flex-col items-center text-center gap-2 ${
                    transferData.transferType === t.key
                      ? "border-blue-600 bg-blue-50/50 shadow-inner"
                      : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <t.icon
                    className={`w-6 h-6 ${transferData.transferType === t.key ? "text-blue-600" : "text-gray-400"}`}
                  />
                  <span
                    className={`text-sm font-bold ${transferData.transferType === t.key ? "text-blue-900" : "text-gray-600"}`}
                  >
                    {t.label}
                  </span>
                  {transferData.transferType === t.key && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Fields */}
          <div className="p-8 space-y-6">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
              2. Transaction Details
            </label>

            {/* Conditional Rendering of fields... */}

            {transferData.transferType === "swift" && (
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Beneficiary Name"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl"
                  value={transferData.swift.beneficiaryName}
                  onChange={(e) =>
                    handleChange("swift", "beneficiaryName", e.target.value)
                  }
                />
                <input
                  placeholder="IBAN / Account Number"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl"
                  value={transferData.swift.beneficiaryIban}
                  onChange={(e) =>
                    handleChange("swift", "beneficiaryIban", e.target.value)
                  }
                />
                <input
                  placeholder="SWIFT/BIC"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl"
                  value={transferData.swift.swiftCode}
                  onChange={(e) =>
                    handleChange("swift", "swiftCode", e.target.value)
                  }
                />
                <input
                  placeholder="Beneficiary Address"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl"
                  value={transferData.swift.beneficiaryAddress}
                  onChange={(e) =>
                    handleChange("swift", "beneficiaryAddress", e.target.value)
                  }
                />
              </div>
            )}

            {transferData.transferType === "internal" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From Account
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500"
                    value={transferData.internal.fromAccountId}
                    onChange={(e) =>
                      handleChange("internal", "fromAccountId", e.target.value)
                    }
                  >
                    {accounts.map((a) => (
                      <option key={a._id} value={a._id}>
                        {a.accountType} (${a.balance})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To Account
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500"
                    value={transferData.internal.toAccount}
                    onChange={(e) =>
                      handleChange("internal", "toAccount", e.target.value)
                    }
                  >
                    <option value="">Choose Recipient Account</option>
                    {accounts
                      .filter(
                        (a) => a._id !== transferData.internal.fromAccountId,
                      )
                      .map((a) => (
                        <option key={a._id} value={a.accountNumber}>
                          {a.accountType} (••••{a.accountNumber.slice(-4)})
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            )}

            {/* SWIFT / SEPA / CRYPTO Inputs (Simplified for brevity) */}

            {/* Common Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  {activeAccount && (
                    <span
                      className={`text-xs font-bold ${
                        (transferData.transferType === "crypto"
                          ? transferData.crypto.amount
                          : transferData.common.amount) > activeAccount.balance
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      Available: ${activeAccount.balance.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400 font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    className={`w-full pl-8 pr-16 py-3 bg-gray-50 border-2 rounded-xl focus:ring-2 outline-none transition-all font-bold text-lg ${
                      activeAccount &&
                      (transferData.transferType === "crypto"
                        ? transferData.crypto.amount
                        : transferData.common.amount) > activeAccount.balance
                        ? "border-red-100 text-red-600 focus:ring-red-500"
                        : "border-transparent focus:ring-blue-500 text-gray-900"
                    }`}
                    placeholder="0.00"
                    value={
                      transferData.transferType === "crypto"
                        ? transferData.crypto.amount
                        : transferData.common.amount
                    }
                    onChange={(e) => {
                      if (transferData.transferType === "crypto")
                        handleChange("crypto", "amount", e.target.value);
                      else handleChange("common", "amount", e.target.value);
                    }}
                  />
                  {activeAccount && (
                    <button
                      type="button"
                      onClick={() => {
                        if (transferData.transferType === "crypto")
                          handleChange(
                            "crypto",
                            "amount",
                            activeAccount.balance,
                          );
                        else
                          handleChange(
                            "common",
                            "amount",
                            activeAccount.balance,
                          );
                      }}
                      className="absolute right-3 top-2.5 px-2 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-md hover:bg-blue-200 transition-colors"
                    >
                      MAX
                    </button>
                  )}
                </div>

                {/* Error Message */}
                {activeAccount &&
                  (transferData.transferType === "crypto"
                    ? transferData.crypto.amount
                    : transferData.common.amount) > activeAccount.balance && (
                    <p className="text-red-500 text-xs mt-2 font-medium animate-pulse">
                      ⚠️ Amount exceeds your available balance
                    </p>
                  )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Purpose of transfer"
                  value={transferData.common.description}
                  onChange={(e) =>
                    handleChange("common", "description", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50/50">
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-30 disabled:grayscale shadow-lg shadow-blue-200"
            >
              <Send className="w-5 h-5" />
              <span>Initialize Transfer</span>
            </button>
            {!isFormValid && (
              <p className="text-center text-xs text-gray-400 mt-4">
                Please fill in all required fields to enable transfer
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
