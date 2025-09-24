"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Globe,
  CreditCard,
  Shield,
  Check,
  Tag,
  Plus,
  Minus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

type CouponCode = {
  code: string;
  discount: number;
  type: "percentage" | "fixed";
  description: string;
};

// Dummy coupon codes for testing
const validCoupons: CouponCode[] = [
  {
    code: "WELCOME10",
    discount: 10,
    type: "percentage",
    description: "10% off your first order",
  },
  {
    code: "SAVE5",
    discount: 5,
    type: "fixed",
    description: "$5 off any order",
  },
  {
    code: "TRAVEL20",
    discount: 20,
    type: "percentage",
    description: "20% off for travelers",
  },
];

export function CheckoutPage() {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<CouponCode | null>(null);
  const [couponError, setCouponError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (state.items.length === 0) {
      router.push("/buy-esim");
    }
  }, [state.items.length, router]);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const applyCoupon = () => {
    const coupon = validCoupons.find(
      (c) => c.code.toLowerCase() === couponCode.toLowerCase()
    );
    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponError("");
      setCouponCode("");
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.type === "percentage") {
      return (state.total * appliedCoupon.discount) / 100;
    }
    return Math.min(appliedCoupon.discount, state.total);
  };

  const discount = calculateDiscount();
  const tax = Math.round((state.total - discount) * 0.08 * 100) / 100; // 8% tax
  const finalTotal = state.total - discount + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // // Simulate payment processing
    router.push("/success");
    // dispatch({ type: "CLEAR_CART" });
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const isFormValid = () => {
    const requiredFields = ["email", "firstName", "lastName", "phone"];
    if (paymentMethod === "card") {
      requiredFields.push("cardNumber", "expiryDate", "cvv");
    }
    return requiredFields.every(
      (field) => formData[field as keyof typeof formData].trim() !== ""
    );
  };

  if (state.items.length === 0) {
    return null; // Will redirect
  }

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
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm text-muted-foreground">
                Secure Checkout
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>→</span>
          <Link href="/buy-esim" className="hover:text-foreground">
            Buy eSIM
          </Link>
          <span>→</span>
          <span className="text-foreground">Checkout</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/buy-esim">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to shopping
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Checkout
              </h1>
              <p className="text-muted-foreground">
                Complete your purchase to get instant eSIM access
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label
                        htmlFor="card"
                        className="flex items-center space-x-2 cursor-pointer flex-1"
                      >
                        <CreditCard className="h-4 w-4" />
                        <span>Credit / Debit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg opacity-50">
                      <RadioGroupItem value="paypal" id="paypal" disabled />
                      <Label
                        htmlFor="paypal"
                        className="flex items-center space-x-2 cursor-pointer flex-1"
                      >
                        <div className="h-4 w-4 bg-blue-600 rounded" />
                        <span>PayPal</span>
                        <Badge variant="outline" className="text-xs">
                          Coming Soon
                        </Badge>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg opacity-50">
                      <RadioGroupItem value="amazon" id="amazon" disabled />
                      <Label
                        htmlFor="amazon"
                        className="flex items-center space-x-2 cursor-pointer flex-1"
                      >
                        <div className="h-4 w-4 bg-orange-500 rounded" />
                        <span>Amazon Pay</span>
                        <Badge variant="outline" className="text-xs">
                          Coming Soon
                        </Badge>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            handleInputChange("cardNumber", e.target.value)
                          }
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) =>
                              handleInputChange("expiryDate", e.target.value)
                            }
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) =>
                              handleInputChange("cvv", e.target.value)
                            }
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="billingAddress">Address</Label>
                    <Input
                      id="billingAddress"
                      value={formData.billingAddress}
                      onChange={(e) =>
                        handleInputChange("billingAddress", e.target.value)
                      }
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) =>
                          handleInputChange("postalCode", e.target.value)
                        }
                        placeholder="10001"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      placeholder="United States"
                    />
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-3 p-3 border rounded-lg"
                    >
                      <span className="text-xl">{item.flag}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {item.country}
                        </p>
                        <div className="flex items-center space-x-3 mt-1 text-xs text-muted-foreground">
                          <span>{item.data}</span>
                          <span>•</span>
                          <span>{item.validity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-sm">
                          ${item.price}
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-xs w-6 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-destructive ml-2"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Coupon Section */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4" />
                    <span className="font-medium">Coupon Code</span>
                  </div>
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div>
                        <div className="font-medium text-green-800">
                          {appliedCoupon.code}
                        </div>
                        <div className="text-sm text-green-600">
                          {appliedCoupon.description}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeCoupon}
                        className="text-green-800"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className={couponError ? "border-destructive" : ""}
                      />
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={!couponCode.trim()}
                      >
                        Apply
                      </Button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-sm text-destructive">{couponError}</p>
                  )}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${state.total}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon?.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complete Order Button */}
            <Button
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={!isFormValid() || isProcessing}
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  Complete Order - ${finalTotal.toFixed(2)}
                </>
              )}
            </Button>

            {/* Trust Badges */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Money Back Guarantee</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Your payment information is secure and encrypted
              </p>
            </div>
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
