import Navbar from '@/components/navbar'

export default function TermsAndCondition() {
  return (
    <div>
        <Navbar />
        <div className="terms-and-conditions p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Please read these terms and conditions carefully before using our website.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our website, you agree to be bound by these terms and conditions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Use License</h2>
      <p className="mb-4">
        Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Disclaimer</h2>
      <p className="mb-4">
        The materials on our website are part of a university Data Structures and Algorithms (DSA) project. This project is created for educational purposes and serves as a demonstration of web development skills. The content provided here may not reflect real-world applications and should not be used as such.
      </p>
      <h2 className="text-2xl font-semibold mb-2">4. Limitations</h2>
      <p className="mb-4">
        In no event shall our website be liable for any damages.
      </p>
      <h2 className="text-2xl font-semibold mb-2">5. Governing Law</h2>
      <p className="mb-4">
        These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction.
      </p>
      <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right, at our sole discretion, to modify or replace these terms at any time.
      </p>
    </div>
    </div>

  )
}
