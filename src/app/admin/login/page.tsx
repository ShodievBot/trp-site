import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/AdminLoginForm";
import { isAdminRequest } from "@/lib/adminAuth";

export default async function AdminLoginPage() {
  if (await isAdminRequest()) {
    redirect("/admin");
  }

  return (
    <main className="adminLoginPage">
      <section className="adminLoginCard">
        <div className="adminLoginLogo">TRP</div>

        <p className="adminEyebrow">Administration</p>
        <h1>Admin panel</h1>
        <p className="adminLoginText">
          Sign in to manage website content, news, payment settings and requests.
        </p>

        <AdminLoginForm />
      </section>
    </main>
  );
}
