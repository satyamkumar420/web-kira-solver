"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Testimonial = {
  name: string;
  role: string;
  comment: string;
};

const testimonialList: Testimonial[] = [
  {
    name: "Amit Sharma",
    role: "Senior Software Engineer @ Nimbus Labs (India)",
    comment:
      "During a live DSA round I snapped the question — Kira returned both brute-force and optimized solutions with clear reasoning. I presented them confidently and cracked the interview.",
  },
  {
    name: "Sophia Müller",
    role: "Machine Learning Engineer @ CortexAI (Germany)",
    comment:
      "I had multiple MCQs in one screenshot. Kira solved them instantly and explained each choice. That speed and clarity helped me ace the round.",
  },
  {
    name: "Priya Singh",
    role: "Data Scientist @ HelixCloud (India)",
    comment:
      "Midway through a coding challenge Kira offered both naive and optimized approaches. Being able to discuss both perspectives made a big impression on the panel.",
  },
  {
    name: "Lucas Moretti",
    role: "Cloud Engineer @ HelixCloud (Brazil)",
    comment:
      "The invisible chat guidance let me fix issues live during an interview without losing momentum. That subtle support made all the difference.",
  },
  {
    name: "Rohan Patel",
    role: "SDE II @ OrbitWorks (India)",
    comment:
      "Kira turned tough coding questions into concise, structured answers. It felt like having a calm interview coach whispering the right steps.",
  },
  {
    name: "Carlos Mendoza",
    role: "Full Stack Developer @ PixelForge (Mexico)",
    comment:
      "Whiteboard rounds got tricky — Kira broke down edge cases and explained trade-offs. I walked the interviewers through solutions confidently.",
  },
  {
    name: "Meera Iyer",
    role: "Frontend Engineer @ NovaTech (India)",
    comment:
      "A live bug fix during an interview? Solved. Kira’s clear logic helped me explain the fix and why it works, which impressed the panel.",
  },
  {
    name: "Rajesh Mehta",
    role: "Backend Engineer @ CloudWorks (Singapore)",
    comment:
      "While debugging mid-round I pasted my code — Kira pinpointed the bottleneck fast. It helped me recover the discussion and finish strong.",
  },
  {
    name: "Hannah Kim",
    role: "AI Researcher @ DeepSolve (South Korea)",
    comment:
      "Kira’s step-by-step breakdown of ML math helped me answer confidently and demonstrate deeper understanding. That round sealed the offer.",
  },
  {
    name: "Ananya Rao",
    role: "Machine Learning Engineer @ Synapse (India)",
    comment:
      "Kira provided clear, reproducible code snippets and explained the theory behind them. It made my technical discussion much stronger.",
  },
];

/**
 * Renders the Testimonials section.
 *
 * Displays curated user testimonials in an auto-playing, accessible carousel.
 * Cards maintain consistent sizing and alignment. Animations are handled with
 * framer-motion and autoplay pauses on interaction for better UX.
 */
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
              Loved by Developers Worldwide
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our users
              have to say.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-6xl mx-auto mt-16"
          >
            <CarouselContent>
              {testimonialList.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                        <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                          <AvatarImage
                            src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(
                              " ",
                              "+"
                            )}&background=random`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-lg font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {testimonial.role}
                        </p>
                        <p className="text-base text-foreground/80 line-clamp-4">
                          &quot;{testimonial.comment}&quot;
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
