import { redirect } from "next/navigation";
import { isAdminRequest } from "@/lib/adminAuth";

export async function requireAdmin() {
  if (!(await isAdminRequest())) {
    redirect("/admin/login");
  }
}
