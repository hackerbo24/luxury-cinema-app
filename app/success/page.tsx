export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white p-8">
      <div className="max-w-md w-full p-8 bg-[#1A1A1A] border border-[#D4AF37] rounded-2xl text-center">
        <div className="text-[#D4AF37] text-5xl mb-6">✓</div>
        <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-400 mb-8">
          Your tickets have been sent to your email. Please show this screen at the cinema entrance.
        </p>
        
        {/* Ticket Mockup */}
        <div className="border-t border-dashed border-[#333] pt-6 mt-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Transaction ID</p>
          <p className="font-mono text-[#D4AF37]">PAY-7729-MNL-2026</p>
        </div>
      </div>
    </main>
  );
}