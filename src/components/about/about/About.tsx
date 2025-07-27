"use client"

import React from "react"
import { FaBook, FaHistory, FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaRunning, FaBuilding, FaTrophy, FaMapMarkedAlt } from "react-icons/fa"

const RangpurPolytechnicAbout = () => {
  const sections = [
    {
      id: "section1",
      title: "প্রতিষ্ঠান পরিচিতি",
      icon: <FaBuilding className="text-blue-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউট বাংলাদেশের উত্তরাঞ্চলের অন্যতম প্রাচীন ও স্বনামধন্য কারিগরি শিক্ষাপ্রতিষ্ঠান। ১৯৬২ সালে প্রতিষ্ঠিত এই ইনস্টিটিউট বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) এবং শিক্ষা মন্ত্রণালয়ের অধিভুক্ত। ২০ একর জমির উপর প্রতিষ্ঠিত এই ক্যাম্পাসে রয়েছে আধুনিক ল্যাব, ওয়ার্কশপ, লাইব্রেরি এবং প্রশাসনিক ভবন।
          </p>
          <p>
            প্রতিষ্ঠানটি ডিপ্লোমা ইন ইঞ্জিনিয়ারিং প্রোগ্রামের পাশাপাশি বিভিন্ন শর্ট কোর্স ও স্কিল ডেভেলপমেন্ট ট্রেনিং প্রদান করে থাকে। বর্তমানে এখানে ৮টি টেকনোলজি বিভাগে প্রায় ৩,৫০০ শিক্ষার্থী অধ্যয়নরত আছে। বাংলাদেশের কারিগরি শিক্ষা ব্যবস্থায় রংপুর পলিটেকনিকের অবদান অপরিসীম।
          </p>
        </>
      )
    },
    {
      id: "section2",
      title: "ইতিহাস ও প্রেক্ষাপট",
      icon: <FaHistory className="text-green-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটের ইতিহাস ১৯৬০-এর দশকের শুরুতে ফিরে যায়। তৎকালীন পাকিস্তান সরকারের কারিগরি শিক্ষা সম্প্রসারণ প্রকল্পের অধীনে ১৯৬২ সালে এটি প্রতিষ্ঠিত হয়। শুরুতে মাত্র ৪টি বিভাগ (সিভিল, মেকানিক্যাল, ইলেকট্রিক্যাল ও পাওয়ার) নিয়ে যাত্রা শুরু করলেও বর্তমানে এটি উত্তরবঙ্গের সবচেয়ে বড় পলিটেকনিক ইনস্টিটিউটে পরিণত হয়েছে।
          </p>
          <p>
            ১৯৭১ সালের মুক্তিযুদ্ধে এই প্রতিষ্ঠানের অনেক শিক্ষক-শিক্ষার্থী সরাসরি অংশগ্রহণ করেন। যুদ্ধপরবর্তী সময়ে ১৯৭৮ সালে ইনস্টিটিউটটি পুনর্গঠিত হয় এবং নতুন বিভাগ যোগ করা হয়। ২০০০ সালের পর থেকে প্রতিষ্ঠানটি দ্রুত ডিজিটালাইজেশনের দিকে এগিয়ে যায়।
          </p>
        </>
      )
    },
    {
      id: "section3",
      title: "টেকনোলজি বিভাগ ও পাঠ্যক্রম",
      icon: <FaLaptopCode className="text-red-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটে বর্তমানে ৮টি টেকনোলজি বিভাগ চালু রয়েছে:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>সিভিল টেকনোলজি</li>
            <li>কম্পিউটার টেকনোলজি</li>
            <li>ইলেকট্রিক্যাল টেকনোলজি</li>
            <li>ইলেকট্রনিক্স টেকনোলজি</li>
            <li>মেকানিক্যাল টেকনোলজি</li>
            <li>পাওয়ার টেকনোলজি</li>
            <li>আর্কিটেকচার অ্যান্ড ইন্টেরিয়র ডিজাইন টেকনোলজি</li>
            <li>রেফ্রিজারেশন অ্যান্ড এয়ার কন্ডিশনিং টেকনোলজি</li>
          </ul>
          <p>
            প্রতিটি বিভাগে ৪ বছর মেয়াদী ডিপ্লোমা ইন ইঞ্জিনিয়ারিং প্রোগ্রাম চালু রয়েছে যা ৮টি সেমিস্টারে বিভক্ত। পাঠ্যক্রমে ৬০% প্র্যাকটিক্যাল এবং ৪০% থিওরেটিক্যাল কন্টেন্ট রয়েছে। প্রতিটি বিভাগের জন্য রয়েছে আধুনিক ল্যাব ও ওয়ার্কশপ সুবিধা।
          </p>
        </>
      )
    },
    {
      id: "section4",
      title: "শিক্ষক ও প্রশাসন",
      icon: <FaChalkboardTeacher className="text-purple-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটের অন্যতম মূল চালিকাশক্তি হচ্ছে এর অভিজ্ঞ, দক্ষ এবং প্রতিশ্রুতিশীল শিক্ষক ও প্রশাসনিক কর্মকর্তা-কর্মচারীবৃন্দ। এই প্রতিষ্ঠানটিতে বর্তমানে ৭০+ জন শিক্ষক এবং প্রশিক্ষক রয়েছেন যারা বিভিন্ন টেকনোলজি বিভাগের অধীনে পাঠদান করেন। তাঁরা সবাই বাংলাদেশ কারিগরি শিক্ষা অধিদপ্তর ও শিক্ষা মন্ত্রণালয় অনুমোদিত প্রশিক্ষণপ্রাপ্ত এবং দীর্ঘদিনের অভিজ্ঞতাসম্পন্ন।
          </p>
          <p>
            প্রতিটি বিভাগের জন্য এক বা একাধিক সিনিয়র ইনস্ট্রাক্টর, জুনিয়র ইনস্ট্রাক্টর, চিফ ইনস্ট্রাক্টর এবং টেকনিক্যাল ইনস্ট্রাক্টর রয়েছেন। তাদের প্রত্যেকে আধুনিক টিচিং মেথড, ডিজিটাল টুলস এবং ইন্ডাস্ট্রি-অ্যালাইন্ড কারিকুলামের সাথে সুপরিচিত। অনেক শিক্ষক উচ্চশিক্ষার জন্য বিদেশে প্রশিক্ষণ গ্রহণ করেছেন এবং BTEB কর্তৃক কোর্স মডারেটর হিসেবেও দায়িত্ব পালন করছেন।
          </p>
          <p>
            একাডেমিক পরিচালনার দিক থেকে অধ্যক্ষ (Principal) হলেন সর্বোচ্চ প্রশাসনিক কর্মকর্তা যিনি পুরো প্রতিষ্ঠানের নেতৃত্ব দেন। তাঁর অধীনে রয়েছেন উপাধ্যক্ষ, বিভাগীয় প্রধানগণ এবং একাডেমিক সুপারভাইজাররা। প্রশাসনিক কার্যক্রম পরিচালনার জন্য রয়েছে অফিস সহকারী, হিসাব সহকারী, স্টোর কিপার, ক্লার্ক, এবং বিভিন্ন সাপোর্ট স্টাফ।
          </p>
        </>
      )
    },
    {
      id: "section5",
      title: "ছাত্র-ছাত্রী অভিজ্ঞতা",
      icon: <FaUserGraduate className="text-yellow-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটে ছাত্রজীবন শুধুমাত্র একাডেমিক সীমাবদ্ধ নয়, এটি একটি সম্পূর্ণ জীবন পরিবর্তনকারী অভিজ্ঞতা। এখানকার শিক্ষার্থীরা শুধু টেকনিক্যাল জ্ঞানই অর্জন করে না, বরং ব্যক্তিত্ব গঠন, নেতৃত্বের গুণাবলী এবং সামাজিক দায়িত্ববোধও শেখে।
          </p>
          <p>
            প্রতিদিনের রুটিন শুরু হয় সকাল ৮টায় অ্যাসেম্বলির মাধ্যমে। ক্লাসগুলো দুটি শিফটে পরিচালিত হয় - সকাল ৮.৩০ থেকে ১.৩০ এবং দুপুর ২.০০ থেকে ৫.০০ পর্যন্ত। প্রতিটি ক্লাসে গড়ে ৪০-৫০ জন শিক্ষার্থী থাকে। ব্যবহারিক ক্লাসগুলো ছোট গ্রুপে বিভক্ত হয়ে ল্যাব ও ওয়ার্কশপে অনুষ্ঠিত হয়।
          </p>
          <p>
            শিক্ষার্থীদের জন্য রয়েছে সুবিশাল লাইব্রেরি যেখানে ১৫,০০০+ বই, জার্নাল এবং ই-লার্নিং রিসোর্স উপলব্ধ। সেমিস্টার জুরে নিয়মিত কুইজ, প্রেজেন্টেশন, টিউটোরিয়াল এবং গ্রুপ ডিসকাশনের মাধ্যমে মূল্যায়ন করা হয়।
          </p>
        </>
      )
    },
    {
      id: "section6",
      title: "সহশিক্ষা ও ক্লাব কার্যক্রম",
      icon: <FaRunning className="text-pink-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটে একাডেমিক শিক্ষার পাশাপাশি সহশিক্ষা কার্যক্রমকে অত্যন্ত গুরুত্ব দেওয়া হয়। প্রতিষ্ঠানে বর্তমানে ১২টি সক্রিয় ক্লাব ও সংগঠন রয়েছে:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>ডিবেটিং ক্লাব - জাতীয় পর্যায়ে পুরস্কারপ্রাপ্ত</li>
            <li>রোভার স্কাউট - সারা বছর সমাজসেবামূলক কাজে নিয়োজিত</li>
            <li>স্পোর্টস ক্লাব - ক্রিকেট, ফুটবল, ভলিবল, ব্যাডমিন্টন টিম</li>
            <li>কালচারাল ক্লাব - নাটক, সংগীত ও আবৃত্তির জন্য</li>
            <li>আইটি সোসাইটি - প্রোগ্রামিং কনটেস্ট ও হ্যাকাথনের আয়োজন করে</li>
            <li>ইনোভেশন ক্লাব - উদ্ভাবনী প্রকল্প ও গবেষণার জন্য</li>
          </ul>
          <p>
            প্রতিবছর আয়োজিত হয় টেক ফেস্ট, স্পোর্টস উইক এবং সাংস্কৃতিক সপ্তাহ। এছাড়াও বিভাগীয় পর্যায়ে বিভিন্ন প্রতিযোগিতা যেমন প্রজেক্ট শোকেস, রোবোটিক্স কম্পিটিশন, সার্কিট ডিজাইন কনটেস্ট ইত্যাদি অনুষ্ঠিত হয়।
          </p>
        </>
      )
    },
    {
      id: "section7",
      title: "অবকাঠামো ও ডিজিটাল সুবিধা",
      icon: <FaBuilding className="text-indigo-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটের ক্যাম্পাসটি ২০ একর জায়গা জুড়ে বিস্তৃত। মূল ক্যাম্পাসে রয়েছে:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>৫টি একাডেমিক ভবন (প্রতিটি ৪ তলা)</li>
            <li>১টি প্রশাসনিক ভবন</li>
            <li>১টি কেন্দ্রীয় লাইব্রেরি ভবন</li>
            <li>৪টি হোস্টেল (৩ ছাত্র, ১ ছাত্রী)</li>
            <li>১টি অডিটোরিয়াম (৫০০ আসন ক্ষমতা)</li>
            <li>১টি মসজিদ</li>
            <li>বহুমুখী খেলার মাঠ</li>
          </ul>
          <p>
            প্রতিটি বিভাগের জন্য রয়েছে আধুনিক ল্যাবরেটরি:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>কম্পিউটার ল্যাব (২০০+ ডেস্কটপ, হাই স্পিড ইন্টারনেট)</li>
            <li>ইলেকট্রনিক্স ল্যাব (অসিলোস্কোপ, ফাংশন জেনারেটরসহ)</li>
            <li>সিভিল ল্যাব (স্ট্রাকচারাল টেস্টিং ইকুইপমেন্ট)</li>
            <li>মেকানিক্যাল ওয়ার্কশপ (ল্যাথ মেশিন, CNC মেশিন)</li>
            <li>আর্কিটেকচার স্টুডিও</li>
          </ul>
        </>
      )
    },
    {
      id: "section8",
      title: "সাফল্য ও অর্জন",
      icon: <FaTrophy className="text-orange-600" />,
      content: (
        <>
          <p>
            গত এক দশকে রংপুর পলিটেকনিক ইনস্টিটিউট অসংখ্য সাফল্য অর্জন করেছে:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>২০২২ সালে বাংলাদেশের সেরা পলিটেকনিক হিসেবে স্বীকৃতি (কারিগরি শিক্ষা অধিদপ্তর)</li>
            <li>২০২১ সালে জাতীয় পর্যায়ের প্রোগ্রামিং কনটেস্টে চ্যাম্পিয়ন</li>
            <li>২০২০ সালে রোবোটিক্স কম্পিটিশনে এশিয়ান লেভেলে অংশগ্রহণ</li>
            <li>৯৫% প্লেসমেন্ট রেট (শিক্ষা শেষে ৬ মাসের মধ্যে)</li>
            <li>১০০+ প্রাক্তন শিক্ষার্থী বিদেশে উচ্চশিক্ষা ও কর্মরত</li>
            <li>ISO 9001:2015 সার্টিফিকেশন অর্জন</li>
            <li>ডিজিটাল বাংলাদেশ অ্যাওয়ার্ড ২০১৯</li>
          </ul>
          <p>
            প্রতিষ্ঠানের শিক্ষকবৃন্দ বিভিন্ন জাতীয় ও আন্তর্জাতিক জার্নালে গবেষণাপত্র প্রকাশ করেছেন। এছাড়াও স্থানীয় শিল্প প্রতিষ্ঠানের সাথে যৌথ গবেষণা প্রকল্প বাস্তবায়ন করা হয়েছে।
          </p>
        </>
      )
    },
    {
      id: "section9",
      title: "ভবিষ্যতের পরিকল্পনা",
      icon: <FaBook className="text-teal-600" />,
      content: (
        <>
          <p>
            রংপুর পলিটেকনিক ইনস্টিটিউটের ভবিষ্যৎ পরিকল্পনাগুলো নিম্নরূপ:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>২০২৫ সালের মধ্যে টেকনিক্যাল ইউনিভার্সিটিতে রূপান্তর</li>
            <li>২টি নতুন বিভাগ চালু (মেকাট্রনিক্স ও অটোমোবাইল ইঞ্জিনিয়ারিং)</li>
            <li>স্মার্ট ক্লাসরুম সম্প্রসারণ (৫০টি রুম)</li>
            <li>আন্তর্জাতিক মানের রিসার্চ সেন্টার স্থাপন</li>
            <li>শিল্প প্রতিষ্ঠানের সাথে MoU বৃদ্ধি</li>
            <li>সোলার এনার্জি সিস্টেম চালু করে গ্রিন ক্যাম্পাস গড়ে তোলা</li>
            <li>ডিজিটাল লাইব্রেরি সম্প্রসারণ (৫০,০০০+ ই-বুক)</li>
          </ul>
          <p>
            প্রতিষ্ঠানটি ২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার অন্যতম সেরা কারিগরি শিক্ষা প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়ার লক্ষ্য নিয়ে কাজ করছে। এর জন্য আন্তর্জাতিক মানের কারিকুলাম ডেভেলপমেন্ট, শিক্ষক প্রশিক্ষণ এবং গবেষণা সুবিধা বৃদ্ধির উপর বিশেষ গুরুত্ব দেওয়া হচ্ছে।
          </p>
        </>
      )
    },
    {
      id: "section10",
      title: "যোগাযোগ ও রিসোর্স লিংক",
      icon: <FaMapMarkedAlt className="text-gray-600" />,
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">ঠিকানা</h3>
              <p className="mb-2">
                রংপুর পলিটেকনিক ইনস্টিটিউট<br />
                হাসানাবাদ, রংপুর-৫৪০০<br />
                বাংলাদেশ
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">যোগাযোগ</h3>
              <p className="mb-2">
                ফোন: +৮৮ ০৫২১ ৬১২৩৪<br />
                ফ্যাক্স: +৮৮ ০৫২১ ৬১২৩৫<br />
                ইমেইল: info@rangpurpolytechnic.edu.bd<br />
                ওয়েবসাইট: www.rangpurpolytechnic.edu.bd
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">গুরুত্বপূর্ণ লিংক</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <span className="mr-2">📝</span>
                <span>অনলাইন ভর্তি পোর্টাল</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <span className="mr-2">💻</span>
                <span>ই-লার্নিং প্ল্যাটফর্ম</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <span className="mr-2">🏛️</span>
                <span>কারিগরি শিক্ষা অধিদপ্তর</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <span className="mr-2">📚</span>
                <span>বাংলাদেশ কারিগরি শিক্ষা বোর্ড</span>
              </a>
            </div>
          </div>
        </>
      )
    }
  ]

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="border-t border-white bg-gradient-to-r from-cyan-800 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">রংপুর পলিটেকনিক ইনস্টিটিউট</h1>
          <p className="text-xl md:text-2xl mb-8">বিস্তারিত প্রতিষ্ঠান পরিচিতি</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                <span className="mr-2">{section.icon}</span>
                <span>{index + 1}. {section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 flex items-center">
                <div className="mr-4">{section.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <div className="p-6 prose dark:prose-invert max-w-none">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">দ্রুত লিংক</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map((section) => (
              <a
                key={`quick-${section.id}`}
                href={`#${section.id}`}
                className="flex items-center px-3 py-2 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="mr-2">{section.icon}</span>
                <span className="text-sm">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default RangpurPolytechnicAbout