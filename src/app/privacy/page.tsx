import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background min-h-screen selection:bg-charcoal selection:text-off-white flex flex-col">
            <Navbar />

            <main className="flex-1 pt-48 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-charcoal/5">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                        PRIVACY POLICY
                    </h1>
                    <p className="text-sm font-mono text-charcoal/50 uppercase tracking-widest mb-12 border-b border-charcoal/10 pb-6">
                        Last updated: February 28, 2026
                    </p>

                    <div className="prose prose-lg prose-headings:font-display prose-headings:text-charcoal prose-p:text-charcoal/80 prose-p:font-sans prose-a:text-charcoal hover:prose-a:text-charcoal/70 prose-strong:text-charcoal max-w-none">
                        <p>
                            At AVILA+, we prioritize the protection of your personal data. This policy explains how we collect and process your information when you visit our website or purchase our products.
                        </p>

                        <h3>1. Who We Are</h3>
                        <p>
                            AVILA+ is a Swiss-born brand committed to precision and transparency.
                        </p>
                        <ul>
                            <li><strong>Company:</strong> AVILA+ (Switzerland)</li>
                            <li><strong>Contact:</strong> <a href="mailto:info@avilaprotein.com">info@avilaprotein.com</a></li>
                        </ul>

                        <h3>2. Information We Collect</h3>
                        <p>
                            We collect only the essentials needed to provide a premium experience:
                        </p>
                        <ul>
                            <li><strong>Personal Data:</strong> Name, email, shipping address, and phone number (provided by you during checkout or inquiry).</li>
                            <li><strong>Payment Data:</strong> Processed securely via third-party providers; we do not store your credit card details.</li>
                            <li><strong>Automated Data:</strong> IP address, browser type, and usage patterns collected via cookies for site security and performance.</li>
                            <li><strong>Social Data:</strong> Limited profile info if you choose to log in via social media platforms.</li>
                        </ul>

                        <h3>3. Why We Process Your Data</h3>
                        <p>We use your information to:</p>
                        <ul>
                            <li><strong>Fulfill Orders:</strong> Process payments and deliver your sparkling protein water.</li>
                            <li><strong>Support You:</strong> Respond to your inquiries and provide technical assistance.</li>
                            <li><strong>Improve Quality:</strong> Analyze site performance to refine our "Science Made Simple" experience.</li>
                            <li><strong>Stay Compliant:</strong> Meet Swiss legal, tax, and accounting requirements.</li>
                        </ul>

                        <h3>4. Sharing Your Data</h3>
                        <p>
                            We do not sell your data. We only share it with trusted partners necessary for our operations:
                        </p>
                        <ul>
                            <li><strong>Service Providers:</strong> Logistics (shipping) and IT infrastructure.</li>
                            <li><strong>Legal Necessity:</strong> If required by Swiss authorities or to protect our legal rights.</li>
                        </ul>

                        <h3>5. Data Retention & Security</h3>
                        <ul>
                            <li><strong>Retention:</strong> We keep your data only as long as necessary for the purposes outlined (e.g., until your order is complete or as required by Swiss tax law).</li>
                            <li><strong>Security:</strong> We implement Swiss-standard technical and organizational measures to protect your data. However, please note that no digital transmission is 100% secure.</li>
                        </ul>

                        <h3>6. Your Rights</h3>
                        <p>Under Swiss law (nFADP) and GDPR, you have the right to:</p>
                        <ul>
                            <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                            <li><strong>Correction:</strong> Ask us to update inaccurate information.</li>
                            <li><strong>Erasure:</strong> Request that we delete your personal data.</li>
                            <li><strong>Withdraw Consent:</strong> Opt-out of marketing communications at any time.</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us at <a href="mailto:info@avilaprotein.com">info@avilaprotein.com</a>.
                        </p>

                        <h3>7. Swiss Oversight</h3>
                        <p>
                            For concerns regarding our data practices, you may contact the Federal Data Protection and Information Commissioner (FDPIC) in Switzerland.
                        </p>

                        <h3>8. Updates</h3>
                        <p>
                            We may update this policy to reflect changes in our services or legal obligations. The "Last Updated" date at the top will indicate the most recent version.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
