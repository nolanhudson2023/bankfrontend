import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${import.meta.env.VITE_NAME || "MyApp"}`;
    }
  }, [title]);
}
