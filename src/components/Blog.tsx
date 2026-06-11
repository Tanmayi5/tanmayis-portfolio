"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/30 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-sm font-mono">06.</span>
            <h2 className="text-2xl md:text-3xl font-bold">insights & writing</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-sm text-muted mb-12 max-w-2xl">
            Sharing what I learn building ML systems in production — the wins, the failures, and the non-obvious lessons.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <motion.a
                href={post.url}
                whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.3)" }}
                className="block border border-border rounded-xl p-6 bg-surface/50 backdrop-blur-sm h-full transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] text-muted font-mono">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-[10px] text-muted">{post.readTime} read</span>
                </div>

                <h3 className="font-bold text-sm mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] bg-surface-2 text-muted rounded-md border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
