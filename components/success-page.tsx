"use client";

import { useState } from "react";
import {
  CheckCircle,
  Download,
  Globe,
  Smartphone,
  QrCode,
  Settings,
  Copy,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// Dummy order data - in real app this would come from the order system
const orderData = {
  orderId: "OLY-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
  orderDate: new Date().toLocaleDateString(),
  plans: [
    {
      id: "usa-5gb-30d",
      name: "USA 5GB – 30 Days",
      country: "United States",
      flag: "🇺🇸",
      data: "5GB",
      validity: "30 Days",
      price: 12,
      iccid: "8901260123456789012",
      qrCode: "/qr-code-for-esim-activation.jpg",
      activationCode: "LPA:1$rsp-prod.oberthur.net$04386-AGYFT-A74Y8-3F815",
    },
  ],
  total: 12.96, // Including tax
};

export function SuccessPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">WaoSim</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/buy-esim"
                className="text-muted-foreground hover:text-foreground"
              >
                Buy eSIM
              </Link>
              <Link href="/my-esims" className="text-primary font-medium">
                My eSIMs
              </Link>
              <Button variant="outline" size="sm">
                Support
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground mx-auto">
            Thank you for your purchase. Your eSIM is ready to activate. Follow
            the instructions below to get connected.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Order Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Order ID:</span>
                    <div className="font-mono font-medium">
                      {orderData.orderId}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Order Date:</span>
                    <div className="font-medium">{orderData.orderDate}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {orderData.plans.map((plan) => (
                    <div
                      key={plan.id}
                      className="flex items-center space-x-3 p-3 border rounded-lg"
                    >
                      <span className="text-2xl">{plan.flag}</span>
                      <div className="flex-1">
                        <h3 className="font-medium">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.country}
                        </p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                          <span>{plan.data}</span>
                          <span>•</span>
                          <span>{plan.validity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${plan.price}</div>
                        <Badge variant="outline" className="text-xs">
                          Ready to Activate
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-medium">Total Paid</span>
                  <span className="text-xl font-bold text-primary">
                    ${orderData.total}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Installation Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>eSIM Installation Instructions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="qr" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="qr"
                      className="flex items-center space-x-2"
                    >
                      <QrCode className="h-4 w-4" />
                      <span>QR Code</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="manual"
                      className="flex items-center space-x-2"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Manual Setup</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="qr" className="space-y-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-white p-4 rounded-lg border inline-block mb-4">
                        <img
                          src={orderData.plans[0].qrCode || "/placeholder.svg"}
                          alt="eSIM QR Code"
                          className="w-48 h-48 mx-auto"
                        />
                      </div>
                      <Button className="mb-4">
                        <Download className="h-4 w-4 mr-2" />
                        Download QR Code
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">How to scan QR code:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                        <li>
                          Go to Settings → Cellular/Mobile Data → Add Cellular
                          Plan
                        </li>
                        <li>Scan the QR code above with your camera</li>
                        <li>
                          Follow the on-screen instructions to complete setup
                        </li>
                        <li>Your eSIM will be activated and ready to use</li>
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="manual" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Activation Code:</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                orderData.plans[0].activationCode,
                                "activation"
                              )
                            }
                          >
                            {copiedText === "activation" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <div className="p-3 bg-muted rounded-lg font-mono text-sm break-all">
                          {orderData.plans[0].activationCode}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">ICCID:</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(orderData.plans[0].iccid, "iccid")
                            }
                          >
                            {copiedText === "iccid" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                          {orderData.plans[0].iccid}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">Manual setup steps:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                          <li>
                            Go to Settings → Cellular/Mobile Data → Add Cellular
                            Plan
                          </li>
                          <li>Select "Enter Details Manually"</li>
                          <li>Paste the activation code above</li>
                          <li>Complete the setup process</li>
                        </ol>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Device-Specific Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Device-Specific Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="ios">
                    <AccordionTrigger>iOS (iPhone/iPad)</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Open Settings app</li>
                        <li>Tap "Cellular" or "Mobile Data"</li>
                        <li>Tap "Add Cellular Plan"</li>
                        <li>Scan QR code or enter details manually</li>
                        <li>Follow prompts to label your plan</li>
                        <li>Choose which line to use for data</li>
                      </ol>
                      <p className="text-xs text-muted-foreground">
                        Requires iOS 12.1 or later. Compatible with iPhone XS,
                        XR, and newer models.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="android">
                    <AccordionTrigger>Android</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Open Settings app</li>
                        <li>Tap "Network & Internet" → "Mobile Network"</li>
                        <li>Tap "Add carrier" or "Add mobile plan"</li>
                        <li>Scan QR code or enter activation code</li>
                        <li>Follow setup instructions</li>
                        <li>Enable the eSIM profile</li>
                      </ol>
                      <p className="text-xs text-muted-foreground">
                        Steps may vary by manufacturer. Requires Android 9 or
                        later with eSIM support.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/my-esims">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Go to My eSIMs
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                >
                  <Link href="/buy-esim">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Buy Another eSIM
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Your eSIM is ready for immediate activation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Plan validity starts when you activate the eSIM</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Keep your QR code safe - you'll need it for installation
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Contact support if you need help with activation</span>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Our support team is available 24/7 to help with activation and
                  setup.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Email: support@waosim.com
                    <br />
                    Phone: +1 (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 WaoSim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
