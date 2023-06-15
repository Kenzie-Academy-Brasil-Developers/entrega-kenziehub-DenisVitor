import { useNavigate } from "react-router-dom";

export function validation() {
  const user = localStorage.getItem("@USER");
  const pageToStay = useNavigate();
  if (user) {
    pageToStay("/dashboard");
  }
}
