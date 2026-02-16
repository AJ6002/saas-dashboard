import Link from 'next/link';

export default function FAQ() {
    return (
        <main className="relative w-[1520.83px] h-[712px] bg-[#000000] mx-auto overflow-hidden text-white font-poppins selection:bg-purple-500 selection:text-white">

            {/* Title "Frequently Asked Questions" - Corrected spelling */}
            <h1 className="absolute w-[666px] h-[80px] left-[164px] top-[89px] font-semibold text-[48px] leading-[80px] text-center text-white">
                Frequently Asked Questions
            </h1>

            {/* --- Left Column --- */}

            {/* Item 1: How to use this template? */}
            <div className="absolute w-[540px] h-[44px] left-[165px] top-[211px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">How to use this template?</span>
                {/* Plus Icon */}
                <div className="absolute left-[500px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 2: What is your refund policy? */}
            <div className="absolute w-[540px] h-[44px] left-[165px] top-[269px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">What is your refund policy?</span>
                {/* Plus Icon */}
                <div className="absolute left-[500px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 3: How to Use this Template? (Duplicate per dump) */}
            <div className="absolute w-[540px] h-[44px] left-[165px] top-[327px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">How to Use this Template?</span>
                {/* Plus Icon */}
                <div className="absolute left-[500px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 4: Best web design agency ever is? */}
            <div className="absolute w-[540px] h-[44px] left-[165px] top-[385px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">Best web design agency ever is?</span>
                {/* Plus Icon */}
                <div className="absolute left-[500px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 5: How can i order web design services? */}
            <div className="absolute w-[540px] h-[44px] left-[165px] top-[443px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">How can i order web design services?</span>
                {/* Plus Icon */}
                <div className="absolute left-[500px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>


            {/* --- Right Column --- */}

            {/* Item 1: What are your shipping rates? */}
            <div className="absolute w-[540px] h-[44px] left-[735px] top-[211px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">What are your shipping rates?</span>
                {/* Plus Icon */}
                <div className="absolute left-[507px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 2: How can I track my order? */}
            <div className="absolute w-[540px] h-[44px] left-[735px] top-[269px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">How can I track my order?</span>
                {/* Plus Icon */}
                <div className="absolute left-[507px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 3: I received the wrong item, what do I do? */}
            <div className="absolute w-[540px] h-[44px] left-[735px] top-[327px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">I received the wrong item, what do I do?</span>
                {/* Plus Icon */}
                <div className="absolute left-[507px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 4: What are benefits of this template? */}
            <div className="absolute w-[540px] h-[44px] left-[735px] top-[385px] bg-[#18181C] rounded-[5px] cursor-pointer hover:bg-[#222228] transition-colors">
                <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">What are benefits of this template?</span>
                {/* Plus Icon */}
                <div className="absolute left-[507px] top-[15px] w-[14px] h-[14px] flex items-center justify-center">
                    <div className="absolute w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                    <div className="absolute w-[2px] h-[14px] bg-white rounded-[3px]"></div>
                </div>
            </div>

            {/* Item 5: How promote the product? (Expanded) */}
            <div className="absolute w-[540px] h-[170px] left-[735px] top-[443px] bg-[#18181C] rounded-[5px] transition-colors">
                <div className="absolute w-[540px] h-[44px] top-0 left-0 cursor-pointer">
                    <span className="absolute left-[28px] top-[12px] font-normal text-[14px] leading-[20px] text-white">How promote the product?</span>
                    {/* Minus Icon */}
                    <div className="absolute left-[507px] top-[21px] w-[14px] h-[2px] bg-white rounded-[3px]"></div>
                </div>

                {/* Divider Line */}
                <div className="absolute w-[493px] h-[1px] left-[28px] top-[49px] bg-[#404047]"></div>

                {/* Answer Text */}
                <p className="absolute left-[28px] top-[63px] w-[493px] h-[83px] font-normal text-[14px] leading-[28px] text-[#9E9E9E]">
                    A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem good design is not only aesthetically pleasing, but also functional.
                </p>
            </div>

            {/* Back to Home Link */}
            <Link href="/" className="absolute top-8 left-8 text-[#9E9E9E] hover:text-white transition-colors">
                ← Back to Home
            </Link>

        </main>
    );
}
