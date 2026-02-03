import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LogIn, X } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!username || !password) {
      setError("Username dan password harus diisi");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("authToken", data.token || "admin-token");
        localStorage.setItem("username", username);
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Username atau password salah");
      }
    } catch (err) {
      console.error(err);
      setError("Gagal terhubung ke server. Pastikan backend berjalan di port 3000");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
          title="Kembali ke beranda"
        >
          <X className="h-6 w-6" />
        </button>

        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
          {/* Header */}
          <CardHeader className="space-y-4 text-center pb-6">
            <CardTitle className="text-3xl font-serif font-bold text-white">
              Admin Login
            </CardTitle>
            <p className="text-sm text-slate-400">
              Silsilah Keluarga Management System
            </p>
          </CardHeader>

          {/* Content */}
          <CardContent>
            {error && (
              <Alert className="mb-6 border-red-500/50 bg-red-500/10 backdrop-blur-sm">
                <AlertDescription className="text-red-300">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Masukkan username"
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn className="h-5 w-5" />
                    Masuk
                  </span>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-600" />
              <span className="text-xs text-slate-500">atau</span>
              <div className="h-px flex-1 bg-slate-600" />
            </div>

            {/* Back to Home Button */}
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              className="w-full border-slate-600 text-slate-500 hover:bg-slate-700/50 hover:text-white"
            >
              Kembali ke Beranda
            </Button>
          </CardContent>
        </Card>

        {/* Footer Text */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Hanya untuk admin keluarga Trah Sutohagnyono
        </p>
      </div>
    </div>
  );
};

export default Login;
