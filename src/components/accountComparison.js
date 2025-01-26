import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, Check } from 'lucide-react';
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

export default function AccountComparison({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <Card ref={modalRef} className="w-full max-w-4xl bg-white relative z-60">
        <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
          <CardTitle className="text-2xl font-bold text-center">Account Comparison</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Version */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center text-gray-900">Free</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Cloud Storage: 50MB</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Projects: Up to 10</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Public Notes: Up to 3 per week</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Includes Ads</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button variant="outline" className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200">
                  Your Current Version
                </Button>
              </div>
            </div>

            {/* Premium Version */}
            <div className="space-y-4 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-center text-yellow-400">Premium</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-100">Cloud Storage: Up to 200MB</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-100">Projects: Unlimited</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-100">Special Banner, Theme, Frame</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-100">Special Access to Premium Community</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-100">No Limit on Public Notes</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-100">Ad-Free Experience</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/coming-soon">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700">
                    Upgrade Now - $3.99/month
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}