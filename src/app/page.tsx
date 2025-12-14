"use client";

import { AccessibilityBar } from "@/components/AccessibilityBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HighlightSection } from "@/components/HighlightSection";
import { ProfileSection } from "@/components/ProfileSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { OrganizationSection } from "@/components/OrganizationSection";
import { TaskFunctionSection } from "@/components/TaskFunctionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DocumentsSection } from "@/components/DocumentsSection";
import { InformationSection } from "@/components/InformationSection";
import { OnlinePortalSection } from "@/components/OnlinePortalSection";
import { SKMSection } from "@/components/SKMSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AccessibilityBar />
      <Navbar />
      <main>
        <HeroSection />
        <HighlightSection />
        <ProfileSection />
        <VisionMissionSection />
        <OrganizationSection />
        <TaskFunctionSection />
        <ServicesSection />
        <DocumentsSection />
        <InformationSection />
        <OnlinePortalSection />
        <SKMSection />
      </main>
      <Footer />
    </>
  );
}
