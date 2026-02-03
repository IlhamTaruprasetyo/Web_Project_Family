import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Home } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    const savedUsername = localStorage.getItem("username");

    if (!token) {
      // Redirect to login if not authenticated
      navigate("/login");
      return;
    }

    setUsername(savedUsername || "Admin");
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const goHome = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Dashboard Admin
            </h1>
            <p className="text-sm text-muted-foreground">
              Silsilah Keluarga Management System
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
              Selamat datang, <span className="text-accent">{username}</span>
            </span>
            <Button
              onClick={handleLogout}
              variant="destructive"
              size="sm"
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Selamat Datang di Admin Panel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Anda telah berhasil login sebagai administrator. Dari panel ini,
                Anda dapat mengelola data silsilah keluarga dan konten website.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Fitur yang tersedia:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Kelola Data Anggota Keluarga</li>
                  <li>Kelola Galeri Foto</li>
                  <li>Edit Informasi Sejarah Keluarga</li>
                  <li>Kelola Akun Admin</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Statistik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Anggota</p>
                <p className="text-2xl font-bold">--</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Foto</p>
                <p className="text-2xl font-bold">--</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Cards */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kelola Anggota</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Tambah, edit, atau hapus data anggota keluarga
              </p>
              <Button className="w-full" variant="outline">
                Buka Manajemen
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kelola Galeri</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Kelola foto dan album keluarga
              </p>
              <Button className="w-full" variant="outline">
                Buka Galeri
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kembali ke Website</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Lihat halaman utama website
              </p>
              <Button
                onClick={goHome}
                className="w-full gap-2"
                variant="outline"
              >
                <Home className="h-4 w-4" />
                Beranda
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
