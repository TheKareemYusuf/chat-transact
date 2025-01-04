import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-full h-24 bg-teal-600 rounded-md flex items-center justify-center">
          <Image
                src="/ChatTransactLogo.png"
                alt="Chat Transact Logo"
                width={256}
                height={256}
                className="w-full h-10 object-contain"
              />
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Welcome to Chat Transact</h1>
        <p className="text-gray-600 mb-8">Your all-in-one platform for messaging and transactions</p>
      </div>

      <div className="space-y-4 w-full max-w-md">
        <Link 
          href="/auth/sign-in"
          className="block w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-3 text-center font-medium"
        >
          Sign In
        </Link>
        <Link
          href="/auth/sign-up"
          className="block w-full bg-white hover:bg-gray-50 text-teal-600 border border-teal-600 rounded-lg px-4 py-3 text-center font-medium"
        >
          Create Account
        </Link>
        <Link
          href="/messages"
          className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-lg px-4 py-3 text-center font-medium"
        >
          View Messages Demo
        </Link>
        <Link
          href="/privacy"
          className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-lg px-4 py-3 text-center font-medium"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}