"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="ShopQuality"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Shop Quality Products, Delivered Fast"
      description="Discover curated items handpicked for you. Experience secure checkout in seconds with our seamless ecommerce platform."
      tag="New Arrivals"
      buttons={[
        {
          text: "Start Shopping",
          href: "#products",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-product-photography_23-2148970201.jpg",
          imageAlt: "Curated product display",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/autumn-still-life-arrangement_23-2149080525.jpg",
          imageAlt: "Lifestyle product setup",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-desk-composition-with-technological-device_23-2147915793.jpg",
          imageAlt: "Minimalist desk space",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-model-career-kit-still-life_23-2150229766.jpg",
          imageAlt: "Organized quality goods",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ecofriendly-beauty-product_23-2150669154.jpg",
          imageAlt: "Elegant product arrangement",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5.0/5 by 10k+ happy customers"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Minimalist Ceramic Vase",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/plastic-container-creme_23-2147672793.jpg",
        },
        {
          id: "p2",
          name: "Ergonomic Tech Stand",
          price: "$38.00",
          imageSrc: "http://img.b2bpic.net/free-photo/smartphone-white-wireless-charger-pad_53876-97100.jpg",
        },
        {
          id: "p3",
          name: "Handmade Wool Blanket",
          price: "$89.00",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-modern-vases-soft-aesthetics_52683-95194.jpg",
        },
      ]}
      title="Curated Collection"
      description="Handpicked items for your daily life. High quality, reliable, and delivered fast."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Mission"
      description="We are dedicated to sourcing the highest quality goods while providing an exceptional shopping experience. Our team works directly with artisans and manufacturers to ensure your products arrive with care."
      bulletPoints={[
        {
          title: "Handpicked Quality",
          description: "Every item is vetted for durability and style.",
        },
        {
          title: "Fast Shipping",
          description: "Global distribution for quick delivery.",
        },
        {
          title: "Secure Checkout",
          description: "Your security is our top priority.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-young-woman-reading-tarot_23-2150298300.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO",
          testimonial: "Amazing products, lightning fast shipping. Truly a top-tier ecommerce experience!",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-adult-asian-woman-outdoor-mature-woman-is-looking-seriously_549566-341.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Designer",
          testimonial: "The quality is unmatched. I love the minimalist aesthetic of everything they offer.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-happy-corporate-woman-suit-stands-street-smiles-poses-near-office-bu_1258-119148.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Marketing",
          testimonial: "Shopping was seamless. I felt confident throughout the entire checkout process.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-glad-pretty-woman-dark-sweater-standing-near-lamps_114579-81911.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Product Manager",
          testimonial: "Best service I've had in a long time. Will definitely be a returning customer.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautifull-caucasian-woman-with-curly-hair-smiles-grey-background_132075-10067.jpg",
        },
        {
          id: "5",
          name: "Elena Vance",
          role: "Architect",
          testimonial: "Elegant design and reliable functionality. Highly recommended shop.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg",
        },
      ]}
      title="What People Say"
      description="Trusted by thousands of happy customers worldwide."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How fast is shipping?",
          content: "We ship orders within 24 hours. Most items reach your door within 3-5 business days.",
        },
        {
          id: "f2",
          title: "Is my payment secure?",
          content: "Yes, we use industry-standard encryption for all transactions.",
        },
        {
          id: "f3",
          title: "Can I return products?",
          content: "We offer a 30-day money-back guarantee on all our products.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to our most commonly asked questions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ShopQuality"
      copyrightText="© 2025 ShopQuality | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
