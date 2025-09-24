"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Smartphone,
  Globe,
  Wifi,
  Download,
  RefreshCw,
  Plus,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  EyeOff,
  Info,
  MapPin,
} from "lucide-react";
import styles from "./my-esim-dashboard.module.css";

interface TopUp {
  id: string;
  amount: number;
  validity: number;
  purchaseDate: string;
  usedData: number;
  status: "active" | "expired";
}

interface RegionCoverage {
  countries: Array<{
    name: string;
    code: string;
    flag: string;
  }>;
}

interface ESimPlan {
  id: string;
  name: string;
  country: string;
  flag: string;
  totalData: number;
  usedData: number;
  validityDays: number;
  daysLeft: number;
  status: "active" | "inactive" | "expired" | "pending";
  installed: boolean;
  activationDate?: string;
  expiryDate: string;
  iccid: string;
  qrCodeUrl?: string;
  isRegionPlan?: boolean;
  regionCoverage?: RegionCoverage;
  topUps?: TopUp[];
  baseData?: number; // For plans with top-ups
}

const mockPlans: ESimPlan[] = [
  {
    id: "1",
    name: "USA 5GB / 30 Days",
    country: "United States",
    flag: "🇺🇸",
    totalData: 7, // Base 5GB + Top-up 2GB
    baseData: 5,
    usedData: 2,
    validityDays: 30,
    daysLeft: 18,
    status: "active",
    installed: true,
    activationDate: "2024-01-15",
    expiryDate: "2024-02-14",
    iccid: "8901260123456789012",
    topUps: [
      {
        id: "topup1",
        amount: 2,
        validity: 7,
        purchaseDate: "2024-01-20",
        usedData: 0.5,
        status: "active",
      },
    ],
  },
  {
    id: "2",
    name: "Europe 10GB / 60 Days",
    country: "Europe",
    flag: "🇪🇺",
    totalData: 10,
    usedData: 0,
    validityDays: 60,
    daysLeft: 60,
    status: "pending",
    installed: false,
    expiryDate: "2024-03-15",
    iccid: "8901260987654321098",
    qrCodeUrl: "/qr-code-for-esim-activation.jpg",
    isRegionPlan: true,
    regionCoverage: {
      countries: [
        { name: "France", code: "FR", flag: "🇫🇷" },
        { name: "Italy", code: "IT", flag: "🇮🇹" },
        { name: "Spain", code: "ES", flag: "🇪🇸" },
        { name: "Germany", code: "DE", flag: "🇩🇪" },
        { name: "Netherlands", code: "NL", flag: "🇳🇱" },
        { name: "Belgium", code: "BE", flag: "🇧🇪" },
      ],
    },
  },
  {
    id: "3",
    name: "Asia 3GB / 15 Days",
    country: "Asia Pacific",
    flag: "🌏",
    totalData: 3,
    usedData: 3,
    validityDays: 15,
    daysLeft: 0,
    status: "expired",
    installed: true,
    activationDate: "2024-01-01",
    expiryDate: "2024-01-16",
    iccid: "8901260555666777888",
    isRegionPlan: true,
    regionCoverage: {
      countries: [
        { name: "Japan", code: "JP", flag: "🇯🇵" },
        { name: "South Korea", code: "KR", flag: "🇰🇷" },
        { name: "Singapore", code: "SG", flag: "🇸🇬" },
        { name: "Thailand", code: "TH", flag: "🇹🇭" },
      ],
    },
  },
];

export function MyESimDashboard() {
  const [plans] = useState<ESimPlan[]>(mockPlans);
  const [showIccid, setShowIccid] = useState<{ [key: string]: boolean }>({});
  const [showCoverage, setShowCoverage] = useState<{ [key: string]: boolean }>(
    {}
  );

  const getStatusBadge = (status: string, installed: boolean) => {
    if (!installed) {
      return (
        <Badge variant="outline" className={styles.notInstalled}>
          Not Installed
        </Badge>
      );
    }

    switch (status) {
      case "active":
        return <Badge className={styles.active}>Active</Badge>;
      case "pending":
        return (
          <Badge variant="secondary" className={styles.pending}>
            Pending
          </Badge>
        );
      case "expired":
        return (
          <Badge variant="destructive" className={styles.expired}>
            Expired
          </Badge>
        );
      default:
        return <Badge variant="outline">Inactive</Badge>;
    }
  };

  const getDataUsagePercentage = (used: number, total: number) => {
    return Math.round((used / total) * 100);
  };

  const maskIccid = (iccid: string) => {
    return `${iccid.slice(0, 4)}****${iccid.slice(-4)}`;
  };

  const toggleIccidVisibility = (planId: string) => {
    setShowIccid((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  const toggleCoverageVisibility = (planId: string) => {
    setShowCoverage((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  const getCombinedDataInfo = (plan: ESimPlan) => {
    if (!plan.topUps || plan.topUps.length === 0) {
      return {
        baseUsed: plan.usedData,
        topUpUsed: 0,
        totalUsed: plan.usedData,
        totalAvailable: plan.totalData,
      };
    }

    const activeTopUps = plan.topUps.filter(
      (topUp) => topUp.status === "active"
    );
    const topUpUsed = activeTopUps.reduce(
      (sum, topUp) => sum + topUp.usedData,
      0
    );
    const baseUsed = Math.max(0, plan.usedData - topUpUsed);

    return {
      baseUsed,
      topUpUsed,
      totalUsed: plan.usedData,
      totalAvailable: plan.totalData,
    };
  };

  return (
    <div className={styles.dashboard}>
      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleSection}>
            <h2 className={styles.pageTitle}>My eSIM Plans</h2>
            <p className={styles.pageSubtitle}>
              Manage your eSIM plans, track data usage, and access installation
              guides
            </p>
          </div>

          {/* Plans Grid */}
          <div className={styles.plansGrid}>
            {plans.map((plan) => {
              const dataInfo = getCombinedDataInfo(plan);
              return (
                <Card key={plan.id} className={styles.planCard}>
                  <CardHeader className={styles.planHeader}>
                    <div className={styles.planTitleRow}>
                      <div className={styles.planInfo}>
                        <span className={styles.flag}>{plan.flag}</span>
                        <div>
                          <CardTitle className={styles.planName}>
                            {plan.name}
                          </CardTitle>
                          <p className={styles.planCountry}>{plan.country}</p>
                          {plan.isRegionPlan && plan.regionCoverage && (
                            <div className={styles.regionIndicator}>
                              <MapPin className="h-3 w-3" />
                              <span>
                                {plan.regionCoverage.countries.length} countries
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      {getStatusBadge(plan.status, plan.installed)}
                    </div>
                  </CardHeader>

                  <CardContent className={styles.planContent}>
                    <Tabs defaultValue="overview" className={styles.planTabs}>
                      <TabsList className={styles.tabsList}>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                        {plan.isRegionPlan && (
                          <TabsTrigger value="coverage">Coverage</TabsTrigger>
                        )}
                        {plan.topUps && plan.topUps.length > 0 && (
                          <TabsTrigger value="topups">Top-ups</TabsTrigger>
                        )}
                        {!plan.installed && (
                          <TabsTrigger value="install">Install</TabsTrigger>
                        )}
                      </TabsList>

                      <TabsContent
                        value="overview"
                        className={styles.tabContent}
                      >
                        <div className={styles.dataUsage}>
                          <div className={styles.dataHeader}>
                            <h4 className={styles.sectionTitle}>Data Usage</h4>
                            <span className={styles.dataText}>
                              {dataInfo.totalUsed}GB / {dataInfo.totalAvailable}
                              GB
                            </span>
                          </div>
                          <Progress
                            value={getDataUsagePercentage(
                              dataInfo.totalUsed,
                              dataInfo.totalAvailable
                            )}
                            className={styles.progressBar}
                          />
                          <div className={styles.dataBreakdown}>
                            <p className={styles.dataPercentage}>
                              {getDataUsagePercentage(
                                dataInfo.totalUsed,
                                dataInfo.totalAvailable
                              )}
                              % used
                            </p>
                            {plan.baseData &&
                              plan.topUps &&
                              plan.topUps.length > 0 && (
                                <div className={styles.dataDetails}>
                                  <span className={styles.dataDetail}>
                                    Base: {dataInfo.baseUsed}GB /{" "}
                                    {plan.baseData}GB
                                  </span>
                                  <span className={styles.dataDetail}>
                                    Top-up: {dataInfo.topUpUsed}GB /{" "}
                                    {dataInfo.totalAvailable - plan.baseData}GB
                                  </span>
                                </div>
                              )}
                          </div>
                        </div>

                        <div className={styles.validity}>
                          <div className={styles.validityItem}>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {plan.daysLeft > 0
                                ? `${plan.daysLeft} days left`
                                : "Expired"}
                            </span>
                          </div>
                          <div className={styles.validityItem}>
                            <span className={styles.expiryDate}>
                              Expires:{" "}
                              {new Date(plan.expiryDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className={styles.actions}>
                          {plan.status === "pending" && !plan.installed && (
                            <Button className={styles.primaryAction}>
                              <Download className="h-4 w-4 mr-2" />
                              Install eSIM
                            </Button>
                          )}
                          {plan.status === "pending" && plan.installed && (
                            <Button className={styles.primaryAction}>
                              <Wifi className="h-4 w-4 mr-2" />
                              Activate Now
                            </Button>
                          )}
                          {plan.status === "expired" && (
                            <div className={styles.expiredActions}>
                              <Button className={styles.primaryAction}>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Renew Plan
                              </Button>
                              <Button
                                variant="outline"
                                className={styles.secondaryAction}
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                Buy New Plan
                              </Button>
                            </div>
                          )}
                          {plan.status === "active" && (
                            <Button
                              variant="outline"
                              className={styles.secondaryAction}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Top Up
                            </Button>
                          )}
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="details"
                        className={styles.tabContent}
                      >
                        <div className={styles.detailsGrid}>
                          <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>ICCID</span>
                            <div className={styles.iccidRow}>
                              <span className={styles.detailValue}>
                                {showIccid[plan.id]
                                  ? plan.iccid
                                  : maskIccid(plan.iccid)}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleIccidVisibility(plan.id)}
                                className={styles.toggleButton}
                              >
                                {showIccid[plan.id] ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>

                          {plan.activationDate && (
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>
                                Activated
                              </span>
                              <span className={styles.detailValue}>
                                {new Date(
                                  plan.activationDate
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          )}

                          <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>
                              Installation
                            </span>
                            <div className={styles.installationStatus}>
                              {plan.installed ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <XCircle className="h-4 w-4 text-red-500" />
                              )}
                              <span className={styles.detailValue}>
                                {plan.installed ? "Installed" : "Not Installed"}
                              </span>
                            </div>
                          </div>

                          {plan.installed && plan.qrCodeUrl && (
                            <div className={styles.detailItem}>
                              <span className={styles.detailLabel}>
                                QR Code
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                className={styles.redownloadButton}
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Re-download QR
                              </Button>
                            </div>
                          )}
                        </div>
                      </TabsContent>

                      {plan.isRegionPlan && plan.regionCoverage && (
                        <TabsContent
                          value="coverage"
                          className={styles.tabContent}
                        >
                          <div className={styles.coverageSection}>
                            <div className={styles.coverageHeader}>
                              <h4 className={styles.sectionTitle}>
                                Included Countries
                              </h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  toggleCoverageVisibility(plan.id)
                                }
                                className={styles.toggleButton}
                              >
                                <Info className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className={styles.countriesGrid}>
                              {plan.regionCoverage.countries
                                .slice(0, showCoverage[plan.id] ? undefined : 6)
                                .map((country) => (
                                  <div
                                    key={country.code}
                                    className={styles.countryItem}
                                  >
                                    <span className={styles.countryFlag}>
                                      {country.flag}
                                    </span>
                                    <span className={styles.countryName}>
                                      {country.name}
                                    </span>
                                  </div>
                                ))}
                            </div>
                            {plan.regionCoverage.countries.length > 6 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  toggleCoverageVisibility(plan.id)
                                }
                                className={styles.showMoreButton}
                              >
                                {showCoverage[plan.id]
                                  ? "Show Less"
                                  : `Show ${
                                      plan.regionCoverage.countries.length - 6
                                    } More`}
                              </Button>
                            )}
                          </div>
                        </TabsContent>
                      )}

                      {plan.topUps && plan.topUps.length > 0 && (
                        <TabsContent
                          value="topups"
                          className={styles.tabContent}
                        >
                          <div className={styles.topUpsSection}>
                            <h4 className={styles.sectionTitle}>
                              Top-up History
                            </h4>
                            <div className={styles.topUpsList}>
                              {plan.topUps.map((topUp) => (
                                <div
                                  key={topUp.id}
                                  className={styles.topUpItem}
                                >
                                  <div className={styles.topUpInfo}>
                                    <div className={styles.topUpHeader}>
                                      <span className={styles.topUpAmount}>
                                        {topUp.amount}GB Top-up
                                      </span>
                                      <Badge
                                        variant={
                                          topUp.status === "active"
                                            ? "default"
                                            : "secondary"
                                        }
                                      >
                                        {topUp.status}
                                      </Badge>
                                    </div>
                                    <div className={styles.topUpDetails}>
                                      <span className={styles.topUpDetail}>
                                        Used: {topUp.usedData}GB /{" "}
                                        {topUp.amount}GB
                                      </span>
                                      <span className={styles.topUpDetail}>
                                        Purchased:{" "}
                                        {new Date(
                                          topUp.purchaseDate
                                        ).toLocaleDateString()}
                                      </span>
                                      <span className={styles.topUpDetail}>
                                        Validity: {topUp.validity} days
                                      </span>
                                    </div>
                                  </div>
                                  <Progress
                                    value={getDataUsagePercentage(
                                      topUp.usedData,
                                      topUp.amount
                                    )}
                                    className={styles.topUpProgress}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                      )}

                      {!plan.installed && (
                        <TabsContent
                          value="install"
                          className={styles.tabContent}
                        >
                          <div className={styles.installGuide}>
                            <h4 className={styles.sectionTitle}>
                              Installation Guide
                            </h4>

                            <Tabs
                              defaultValue="qr"
                              className={styles.installTabs}
                            >
                              <TabsList className={styles.installTabsList}>
                                <TabsTrigger value="qr">QR Code</TabsTrigger>
                                <TabsTrigger value="manual">
                                  Manual Setup
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent
                                value="qr"
                                className={styles.installTabContent}
                              >
                                {plan.qrCodeUrl && (
                                  <div className={styles.qrSection}>
                                    <img
                                      src={plan.qrCodeUrl || "/placeholder.svg"}
                                      alt="eSIM QR Code"
                                      className={styles.qrCode}
                                    />
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className={styles.downloadQr}
                                    >
                                      <Download className="h-4 w-4 mr-2" />
                                      Download QR
                                    </Button>
                                  </div>
                                )}

                                <div className={styles.installSteps}>
                                  <div className={styles.step}>
                                    <div className={styles.stepNumber}>1</div>
                                    <div className={styles.stepContent}>
                                      <h5>Open Settings</h5>
                                      <p>
                                        Go to Settings → Cellular → Add Cellular
                                        Plan
                                      </p>
                                    </div>
                                  </div>
                                  <div className={styles.step}>
                                    <div className={styles.stepNumber}>2</div>
                                    <div className={styles.stepContent}>
                                      <h5>Scan QR Code</h5>
                                      <p>
                                        Use your camera to scan the QR code
                                        above
                                      </p>
                                    </div>
                                  </div>
                                  <div className={styles.step}>
                                    <div className={styles.stepNumber}>3</div>
                                    <div className={styles.stepContent}>
                                      <h5>Complete Setup</h5>
                                      <p>
                                        Follow the on-screen instructions to
                                        complete installation
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent
                                value="manual"
                                className={styles.platformContent}
                              >
                                <div className={styles.activationCodes}>
                                  <div className={styles.codeItem}>
                                    <span className={styles.codeLabel}>
                                      SM-DP+ Address
                                    </span>
                                    <code className={styles.codeValue}>
                                      1$rsp-prod.oberthur.net$ABC123
                                    </code>
                                  </div>
                                  <div className={styles.codeItem}>
                                    <span className={styles.codeLabel}>
                                      Activation Code
                                    </span>
                                    <code className={styles.codeValue}>
                                      LPA:1$rsp-prod.oberthur.net$ABC123-DEF456
                                    </code>
                                  </div>
                                </div>
                                <div className={styles.installSteps}>
                                  <div className={styles.step}>
                                    <div className={styles.stepNumber}>1</div>
                                    <div className={styles.stepContent}>
                                      <h5>Open Settings</h5>
                                      <p>
                                        Settings → Network & Internet → SIMs →
                                        Add SIM
                                      </p>
                                    </div>
                                  </div>
                                  <div className={styles.step}>
                                    <div className={styles.stepNumber}>2</div>
                                    <div className={styles.stepContent}>
                                      <h5>Download SIM</h5>
                                      <p>
                                        Select "Download a SIM instead?" and
                                        enter the activation code
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </TabsContent>
                      )}
                    </Tabs>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className={styles.quickActions}>
            <Card className={styles.actionCard}>
              <CardContent className={styles.actionContent}>
                <Smartphone className="h-8 w-8 text-primary" />
                <div>
                  <h3 className={styles.actionTitle}>Need Help?</h3>
                  <p className={styles.actionDescription}>
                    Get support with installation or troubleshooting
                  </p>
                </div>
                <Button variant="outline">Contact Support</Button>
              </CardContent>
            </Card>

            <Card className={styles.actionCard}>
              <CardContent className={styles.actionContent}>
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <h3 className={styles.actionTitle}>Explore Plans</h3>
                  <p className={styles.actionDescription}>
                    Discover eSIM plans for your next destination
                  </p>
                </div>
                <Button>Browse Plans</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyESimDashboard;
