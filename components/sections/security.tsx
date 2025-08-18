import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Key, AlertTriangle, FileCheck } from "lucide-react";

export function SecuritySection() {
  return (
    <section id="security" className="container mx-auto px-6 py-24 bg-muted/50">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Security First</Badge>
        <h2 className="text-3xl font-bold mb-4">Enterprise-grade security</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your data and servers are protected with industry-leading security measures and best practices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <CardTitle>End-to-End Encryption</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              All data transmission is encrypted using TLS 1.3, and sensitive data is encrypted at rest using AES-256.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <CardTitle>Two-Factor Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Secure your account with TOTP-based 2FA, hardware keys, or biometric authentication for enhanced protection.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <CardTitle>Audit Logging</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Comprehensive audit trails track all user actions and system changes with tamper-proof logging.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Key className="w-6 h-6" />
            </div>
            <CardTitle>Role-Based Access</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Granular permission system allows you to control exactly what each user can access and modify.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <CardTitle>Intrusion Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Real-time monitoring and automated response to suspicious activities and potential security threats.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6" />
            </div>
            <CardTitle>Compliance Ready</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built to meet SOC 2, GDPR, and other compliance requirements with regular security audits.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
