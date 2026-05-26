import Link from "next/link";
import { Bot } from "lucide-react";
import { categories } from "@/lib/tools-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      {/* Knowledge Base Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Understanding Modern AI
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold text-foreground">How AI Models Work</h3>
              <p className="text-sm text-muted-foreground">
                Modern AI tools are powered by large language models (LLMs) and diffusion models.
                LLMs like GPT-4 and Claude use transformer architecture trained on vast text
                datasets to understand and generate human-like text. Diffusion models like
                Stable Diffusion and Midjourney create images by learning to reverse a
                noise-adding process.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold text-foreground">Tech Stacks of Top Companies</h3>
              <p className="text-sm text-muted-foreground">
                Leading AI companies use PyTorch and TensorFlow for model training, CUDA for
                GPU acceleration, and cloud infrastructure from AWS, GCP, or Azure. Many use
                React/Next.js for frontends, Python/FastAPI for backends, and specialized
                hardware like NVIDIA H100 GPUs or Google TPUs for inference.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold text-foreground">The Future of AI Tools</h3>
              <p className="text-sm text-muted-foreground">
                AI is rapidly evolving with multimodal models that understand text, images, and
                audio simultaneously. We&apos;re seeing more AI agents that can take actions,
                improved reasoning capabilities, and tools becoming more accessible to everyone.
                The focus is shifting toward practical applications and responsible AI development.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">AI World Hub</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Your ultimate resource for discovering and comparing the best AI tools.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(1, 6).map((category) => (
                <li key={category}>
                  <Link
                    href={`/?category=${category}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-foreground">More Categories</h4>
            <ul className="space-y-2">
              {categories.slice(6).map((category) => (
                <li key={category}>
                  <Link
                    href={`/?category=${category}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AI World Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
