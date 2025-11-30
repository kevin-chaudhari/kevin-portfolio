// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   ArrowLeft, 
//   ExternalLink, 
//   Github, 
//   Cpu, 
//   Activity, 
//   Globe, 
//   ShieldAlert, 
//   TrendingUp, 
//   Layers,
//   Code,
//   Database,
//   Terminal,
//   ShoppingBag
// } from 'lucide-react';

// // --- COMPONENTS FOR INDIVIDUAL PROJECT PAGES ---

// // 1. FinSense (Moved from Project 5 to Project 1)
// // 1. FinSense (Moved from Project 5 to Project 1)
// const Project1 = ({ onBack }) => (
//   <section id="projects" className="c-space section-spacing">
//   <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
//     <div className="max-w-5xl mx-auto">
//       <button onClick={onBack} className="group flex items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors">
//         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Projects
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-4">
//               FinSense
//             </h1>
//             <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
//               <TrendingUp className="w-6 h-6 text-blue-500" />
//               AI-Powered Personal Finance Agent
//             </h2>
//           </div>

//           <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
//             <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden" />
//             <img
//                 src="public/Project1.png"
//                 alt="FinSense Preview"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-700"
//                 />
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About The Project</h3>
//             <p className="text-slate-400 leading-relaxed text-lg">
//               FinSense is an AI-powered financial management platform that processes and categorizes 10,000+ transactions to deliver real-time insights. The system features an intelligent chatbot built with LangChain, Gemini, and RAG (FAISS) to provide personalized financial analysis and budgeting guidance. Its interactive visual dashboard enhances clarity and decision-making, increasing user engagement by over 60%.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-8">

//           {/* Tech Stack */}
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "LangChain",
//                 "Gemini",
//                 "RAG",
//                 "FAISS",
//                 "React",
//                 "Next.js",
//                 "Flask",
//                 "OpenAI API"
//               ].map((tech) => (
//                 <span 
//                   key={tech} 
//                   className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-blue-300 rounded-full border border-slate-700"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Project Links */}
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>

//             <div className="space-y-3">
//               {/* GitHub Link - Opens in New Tab */}
//               <a
//                 href="https://github.com/kevin-chaudhari/FinSense"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-slate-700"
//               >
//                 <Github className="w-4 h-4" />
//                 Source Code
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
// );


// // 2. Morbius (Moved from Project 1 to Project 2)
// const Project2 = ({ onBack }) => (
//   <section id="projects" className="c-space section-spacing">
//   <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
//     <div className="max-w-5xl mx-auto">
//       <button 
//         onClick={onBack} 
//         className="group flex items-center gap-2 text-teal-400 mb-8 hover:text-teal-300 transition-colors"
//       >
//         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//         <span className="font-semibold tracking-wide">Back to Projects</span>
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500 mb-4">
//               Morbius
//             </h1>
//             <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
//               <Activity className="w-6 h-6 text-teal-500" />
//               Disease Prediction System
//             </h2>
//           </div>

//           <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
//             <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden" />
//             <img
//                 src="public/Project2.png"
//                 alt="FinSense Preview"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-700"
//                 />
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About The Project</h3>
//             <p className="text-slate-400 leading-relaxed text-lg">
//               Morbius is an advanced predictive analytics platform designed to aid medical professionals in early disease detection. By utilizing historical patient data and real-time vitals, the system employs ensemble machine learning models to identify risk factors for cardiovascular and respiratory conditions with 94% accuracy.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-8">
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
//             <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
//               <Code className="w-5 h-5 text-purple-400" />
//               Tech Stack
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {["Python", "TensorFlow","Gemini API", "FastAPI", "React","Docker"].map((tech) => (
//                 <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-teal-300 rounded-full border border-slate-700">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Project Links */}
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>

//             <div className="space-y-3">
//               {/* GitHub Link - Opens in New Tab */}
//               <a
//                 href="https://github.com/kevin-chaudhari/Morbius"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-slate-700"
//               >
//                 <Github className="w-4 h-4" />
//                 Source Code
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
// );

// // 3. Serene Initiative (Moved from Project 2 to Project 3)
// const Project3 = ({ onBack }) => (
//   <section id="projects" className="c-space section-spacing">
//   <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
//     <div className="max-w-5xl mx-auto">
//       <button onClick={onBack} className="group flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
//         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Projects
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
//               Serene Initiative
//             </h1>
//             <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
//               <Layers className="w-6 h-6 text-purple-500" />
//               VR Mental Wellness Platform
//             </h2>
//           </div>

//          <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
//             <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden" />
//             <img
//                 src="public/Project3.png"
//                 alt="FinSense Preview"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-700"
//                 />
//           </div>


//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About The Project</h3>
//             <p className="text-slate-400 leading-relaxed text-lg">
//               A comprehensive VR solution aimed at reducing workplace anxiety and stress. Serene Initiative places users in procedurally generated calming environments where they can interact with soothing elements, participate in guided breathing exercises, and track their bio-feedback in real-time.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-8">
//            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {["HTML5", "CSS3", "JavaScript", "PHP", "Three.js", "MySQL", "Matterport"].map((tech) => (
//                 <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-purple-300 rounded-full border border-slate-700">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Project Links */}
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>

//             <div className="space-y-3">
//               {/* GitHub Link - Opens in New Tab */}
//               <a
//                 href="https://github.com/kevin-chaudhari/Serene-Initiative"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-slate-700"
//               >
//                 <Github className="w-4 h-4" />
//                 Source Code
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
// );

// // 4. TruthGuard (Stays as Project 4)
// const Project4 = ({ onBack }) => (
//   <section id="projects" className="c-space section-spacing">
//   <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
//     <div className="max-w-5xl mx-auto">
//       <button onClick={onBack} className="group flex items-center gap-2 text-red-400 mb-8 hover:text-red-300 transition-colors">
//         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Projects
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-4">
//               TruthGuard
//             </h1>
//             <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
//               <ShieldAlert className="w-6 h-6 text-red-500" />
//               Fake News Detection System
//             </h2>
//           </div>

//           <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
//             <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden" />
//             <img
//                 src="public/Project4.jpg"
//                 alt="FinSense Preview"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-700"
//                 />
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About The Project</h3>
//             <p className="text-slate-400 leading-relaxed text-lg">
//               A browser extension and web dashboard that uses Natural Language Processing (NLP) to analyze article credibility in real-time. TruthGuard cross-references claims against trusted sources, analyzes sentiment bias, and flags potential misinformation with a 'Trust Score' overlay.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-8">
//            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {["Python", "BERT", "Flask", "React", "Chrome Extension API"].map((tech) => (
//                 <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-red-300 rounded-full border border-slate-700">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Project Links */}
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>

//             <div className="space-y-3">
//               {/* GitHub Link - Opens in New Tab */}
//               <a
//                 href="https://github.com/kevin-chaudhari/TruthGuard"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-slate-700"
//               >
//                 <Github className="w-4 h-4" />
//                 Source Code
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
// );

// // 5. ArtKart (New Project)
// const Project5 = ({ onBack }) => (
//   <section id="projects" className="c-space section-spacing">
//   <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
//     <div className="max-w-5xl mx-auto">
//       <button onClick={onBack} className="group flex items-center gap-2 text-amber-400 mb-8 hover:text-amber-300 transition-colors">
//         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Projects
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600 mb-4">
//               Artekart
//             </h1>
//             <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
//               <ShoppingBag className="w-6 h-6 text-amber-500" />
//               Cultural E-commerce Platform
//             </h2>
//           </div>
//           <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
//             <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden" />
//             <img
//             src="public/Project5.png"
//             alt="FinSense Preview"
//             className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-700"
//             />
//           </div>
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About The Project</h3>
//             <p className="text-slate-400 leading-relaxed text-lg">
//               Artekart is a specialized e-commerce marketplace dedicated to preserving and selling culturally significant artifacts and traditional crafts. By connecting local artisans directly with a global audience, the platform ensures fair trade pricing and helps sustain traditional art forms that are culturally engaging and rich in history.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-8">
//            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {["HTML","CSS", "Javascript", "MongoDB"].map((tech) => (
//                 <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-amber-300 rounded-full border border-slate-700">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Project Links */}
//           <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>

//             <div className="space-y-3">
//               {/* GitHub Link - Opens in New Tab */}
//               <a
//                 href="https://github.com/kevin-chaudhari/Artekart"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-slate-700"
//               >
//                 <Github className="w-4 h-4" />
//                 Source Code
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
// );

// // 6. Refoodify (Moved from Project 3 to Project 6)
// const Project6 = ({ onBack }) => (
//   <section id="projects" className="c-space section-spacing">
//   <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
//     <div className="max-w-5xl mx-auto">
//       <button onClick={onBack} className="group flex items-center gap-2 text-green-400 mb-8 hover:text-green-300 transition-colors">
//         <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Projects
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-4">
//               Refoodify
//             </h1>
//             <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
//               <Globe className="w-6 h-6 text-green-500" />
//               Food Waste Management System
//             </h2>
//           </div>
//           <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
//             <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden" />
//             <img
//             src="public/Project6.jpg"
//             alt="Refoodify Preview"
//             className="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-700"
//             />
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About The Project</h3>
//             <p className="text-slate-400 leading-relaxed text-lg">
//               Refoodify connects local restaurants and grocery stores with homeless shelters and food banks. The platform manages inventory logistics, schedules pickups via an Uber-like interface, and provides tax-deduction analytics for donors, successfully diverting over 5 tons of food waste in the pilot phase.
//             </p>
//           </div>
//         </div>
        
//         <div className="space-y-8">
//            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
//             <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {["HTML5", "CSS3", "JavaScript", "PHP", "Google API", "IBM WatsonX"].map((tech) => (
//                 <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-green-300 rounded-full border border-slate-700">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
// );

// // --- MAIN PROJECTS LIST COMPONENT ---

// const ProjectsList = ({ onNavigate }) => {
//   const projects = [
//     {
//       id: 1,
//       title: "FinSense",
//       subtitle: "AI Personal Finance Agent",
//       description: "Smart financial assistant that analyzes spending habits via banking APIs and suggests budget optimizations.",
//       tech: ["LangChain", "Gemini","RAG", "FAISS"],
//       color: "group-hover:text-blue-400",
//       border: "group-hover:border-blue-500/50",
//       glow: "group-hover:shadow-blue-900/20",
//       icon: TrendingUp
//     },
//     {
//       id: 2,
//       title: "Morbius",
//       subtitle: "Disease Prediction System",
//       description: "An AI-driven platform for early disease detection utilizing predictive analytics and patient data modeling.",
//       tech: ["Python", "ML", "React"],
//       color: "group-hover:text-teal-400",
//       border: "group-hover:border-teal-500/50",
//       glow: "group-hover:shadow-teal-900/20",
//       icon: Activity
//     },
//     {
//       id: 3,
//       title: "Serene Initiative",
//       subtitle: "VR Mental Wellness Platform",
//       description: "Immersive VR experiences designed to reduce stress and anxiety through procedurally generated guided meditation.",
//       tech: ["JavaScript", "Three.js", "MySQL", "Matterport"],
//       color: "group-hover:text-purple-400",
//       border: "group-hover:border-purple-500/50",
//       glow: "group-hover:shadow-purple-900/20",
//       icon: Layers
//     },
//     {
//       id: 4,
//       title: "TruthGuard",
//       subtitle: "Fake News Detection System",
//       description: "Browser extension utilizing NLP and sentiment analysis to verify news credibility and source reliability in real-time.",
//       tech: ["NLP", "TensorFlow", "BERT"],
//       color: "group-hover:text-red-400",
//       border: "group-hover:border-red-500/50",
//       glow: "group-hover:shadow-red-900/20",
//       icon: ShieldAlert
//     },
//     {
//       id: 5,
//       title: "ArtKart",
//       subtitle: "Cultural E-commerce",
//       description: "An e-commerce platform dedicated to selling culturally engaging and previous-generation products, connecting artisans to a global market.",
//       tech: ["HTML", "Javascript", "MongoDB"],
//       color: "group-hover:text-amber-400",
//       border: "group-hover:border-amber-500/50",
//       glow: "group-hover:shadow-amber-900/20",
//       icon: ShoppingBag
//     },
//     {
//       id: 6,
//       title: "Refoodify",
//       subtitle: "Food Waste Management",
//       description: "A logistical network connecting surplus food from restaurants to local shelters to minimize waste and aid communities.",
//       tech: ["JavaScript", "Google API", "IBM WatsonX"],
//       color: "group-hover:text-green-400",
//       border: "group-hover:border-green-500/50",
//       glow: "group-hover:shadow-green-900/20",
//       icon: Globe
//     }
//   ];

//   return (
//     <section id="projects" className="c-space section-spacing">
//     <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-16 text-center space-y-4">
//           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
//             Project Works
//           </h1>
//           <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
//             A collection of innovative projects spanning Artificial Intelligence, Virtual Reality, and Full-Stack Development.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               onClick={() => onNavigate(project.id)}
//               className={`group relative h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.glow} ${project.border}`}
//             >
//               <div className="absolute top-6 right-6 text-slate-700 transition-colors duration-300 group-hover:text-white">
//                 <ExternalLink className="w-5 h-5" />
//               </div>

//               <div className="flex flex-col h-full">
//                 <div className="mb-6">
//                   <div className={`w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 transition-colors ${project.color} group-hover:bg-slate-800/80`}>
//                     <project.icon className="w-6 h-6" />
//                   </div>
//                   <h3 className={`text-2xl font-bold text-slate-100 transition-colors ${project.color}`}>
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-slate-500 font-mono mt-1 uppercase tracking-wider">
//                     {project.subtitle}
//                   </p>
//                 </div>

//                 <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
//                   {project.tech.map((tag, index) => (
//                     <span 
//                       key={index} 
//                       className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// // // --- MAIN LAYOUT CONTROLLER ---

// // const ProjectsPage = () => {
// //   const [currentPath, setCurrentPath] = useState('root');

// //   // This effect handles the scrolling behavior
// //   useEffect(() => {
// //     // Instead of scrolling to (0,0) which jumps to the top of the website,
// //     // we find the 'projects' section and scroll strictly to that.
// //     const projectSection = document.getElementById('projects');
    
// //     if (projectSection) {
// //       // 'block: start' aligns the top of the projects section with the top of the viewport
// //       projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //     }
// //   }, [currentPath]);

// //   const navigateToProject = (id) => {
// //     setCurrentPath(`project${id}`);
// //   };

// //   const navigateHome = () => {
// //     setCurrentPath('root');
// //   };

// //   // Render the correct "Page" based on state
// //   // We wrap this in a div to ensure the transition animations play smoothly
// //   return (
// //     <div className="w-full transition-all duration-500 ease-in-out">
// //       {(() => {
// //         switch (currentPath) {
// //           case 'project1': return <Project1 onBack={navigateHome} />;
// //           case 'project2': return <Project2 onBack={navigateHome} />;
// //           case 'project3': return <Project3 onBack={navigateHome} />;
// //           case 'project4': return <Project4 onBack={navigateHome} />;
// //           case 'project5': return <Project5 onBack={navigateHome} />;
// //           case 'project6': return <Project6 onBack={navigateHome} />;
// //           default: return <ProjectsList onNavigate={navigateToProject} />;
// //         }
// //       })()}
// //     </div>
// //   );
// // };

// // export default ProjectsPage;

// // ... (All your project components Project1, Project2, etc. remain exactly the same) ...

// // --- MAIN LAYOUT CONTROLLER ---

// const ProjectsPage = () => {
//   const [currentPath, setCurrentPath] = useState('root');
  
//   // We use this Ref to track if the website just loaded
//   const isFirstRender = useRef(true);

//   useEffect(() => {
//     // 1. If this is the very first time the site loads (refresh):
//     if (isFirstRender.current) {
//       isFirstRender.current = false; // Set flag to false for future clicks
//       return; // STOP HERE. Do not scroll. Stay at the top of the website.
//     }

//     // 2. We only run this code below if the user actually CLICKS a project or back button
//     const projectSection = document.getElementById('projects');
//     if (projectSection) {
//       projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [currentPath]);

//   const navigateToProject = (id) => {
//     setCurrentPath(`project${id}`);
//   };

//   const navigateHome = () => {
//     setCurrentPath('root');
//   };

//   return (
//     <div className="w-full">
//       {(() => {
//         switch (currentPath) {
//           case 'project1': return <Project1 onBack={navigateHome} />;
//           case 'project2': return <Project2 onBack={navigateHome} />;
//           case 'project3': return <Project3 onBack={navigateHome} />;
//           case 'project4': return <Project4 onBack={navigateHome} />;
//           case 'project5': return <Project5 onBack={navigateHome} />;
//           case 'project6': return <Project6 onBack={navigateHome} />;
//           default: return <ProjectsList onNavigate={navigateToProject} />;
//         }
//       })()}
//     </div>
//   );
// };

// export default ProjectsPage;




import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Cpu, 
  Activity, 
  Globe, 
  ShieldAlert, 
  TrendingUp, 
  Layers,
  Code,
  Database,
  Terminal,
  ShoppingBag
} from 'lucide-react';


// -------------------------------------------------------------------
// INDIVIDUAL PROJECT COMPONENTS
// -------------------------------------------------------------------

// 1. FinSense 
const Project1 = ({ onBack }) => (
  <section id="projects" className="c-space section-spacing">
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
      <div className="max-w-5xl mx-auto">

        <button onClick={onBack} className="group flex items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
                FinSense
              </h1>
              <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                AI-Powered Personal Finance Agent
              </h2>
            </div>

            <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden">
              <img
                src="/Project1.png"
                alt="FinSense Preview"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
                About The Project
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                FinSense is an AI-powered financial management platform that processes and categorizes 10,000+ transactions to deliver real-time insights. The system features an intelligent chatbot built with LangChain, Gemini, and RAG (FAISS) to provide personalized financial analysis and budgeting guidance. Its interactive visual dashboard enhances clarity and decision-making, increasing user engagement by over 60%.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["LangChain","Gemini","RAG","FAISS","React","Next.js","Flask","OpenAI API"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-slate-800 text-blue-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>
              <a
                href="https://github.com/kevin-chaudhari/FinSense"
                target="_blank"
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);


// 2. Morbius
const Project2 = ({ onBack }) => (
  <section id="projects" className="c-space section-spacing">
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
      <div className="max-w-5xl mx-auto">

        <button 
          onClick={onBack} 
          className="group flex items-center gap-2 text-teal-400 mb-8 hover:text-teal-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                Morbius
              </h1>
              <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
                <Activity className="w-6 h-6 text-teal-500" />
                Disease Prediction System
              </h2>
            </div>

            <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden">
              <img
                src="/Project2.png"
                alt="Morbius"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
                About The Project
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                 Morbius is an advanced predictive analytics platform designed to aid medical professionals in early disease detection. By utilizing historical patient data and real-time vitals, the system employs ensemble machine learning models to identify risk factors for cardiovascular and respiratory conditions with 94% accuracy.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python","TensorFlow","Gemini API","FastAPI","React","Docker"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-slate-800 text-teal-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>
              <a
                href="https://github.com/kevin-chaudhari/Morbius"
                target="_blank"
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
);


// 3. Serene Initiative
const Project3 = ({ onBack }) => (
  <section id="projects" className="c-space section-spacing">
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
      <div className="max-w-5xl mx-auto">

        <button onClick={onBack} className="group flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                Serene Initiative
              </h1>
              <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
                <Layers className="w-6 h-6 text-purple-500" />
                VR Mental Wellness Platform
              </h2>
            </div>

            <div className="w-full aspect-video bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden">
              <img
                src="/Project3.png"
                alt="Serene Initiative"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
                About The Project
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                A comprehensive VR solution aimed at reducing workplace anxiety and stress. Serene Initiative places users in procedurally generated calming environments where they can interact with soothing elements, participate in guided breathing exercises, and track their bio-feedback in real-time.
              </p>
            </div>

          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5","CSS3","JavaScript","PHP","Three.js","MySQL","Matterport"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-slate-800 text-purple-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>
              <a
                href="https://github.com/kevin-chaudhari/Serene-Initiative"
                target="_blank"
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
);


// 4. TruthGuard
const Project4 = ({ onBack }) => (
  <section id="projects" className="c-space section-spacing">
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
      <div className="max-w-5xl mx-auto">

        <button onClick={onBack} className="group flex items-center gap-2 text-red-400 mb-8 hover:text-red-300 transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                TruthGuard
              </h1>
              <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-red-500" />
                Fake News Detection System
              </h2>
            </div>

            <div className="w-full aspect-video rounded-xl border border-slate-800 relative overflow-hidden">
              <img
                src="/Project4.jpg"
                alt="TruthGuard"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
                About The Project
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                A browser extension and web dashboard that uses Natural Language Processing (NLP) to analyze article credibility in real-time. TruthGuard cross-references claims against trusted sources, analyzes sentiment bias, and flags potential misinformation with a 'Trust Score' overlay

              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python","BERT","Flask","React","Chrome Extension API"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-slate-800 text-red-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>
              <a
                href="https://github.com/kevin-chaudhari/TruthGuard"
                target="_blank"
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);


// 5. ArtKart
const Project5 = ({ onBack }) => (
  <section id="projects" className="c-space section-spacing">
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
      <div className="max-w-5xl mx-auto">

        <button onClick={onBack} className="group flex items-center gap-2 text-amber-400 mb-8 hover:text-amber-300 transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent mb-4">
                ArtKart
              </h1>
              <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-amber-500" />
                Cultural E-commerce Platform
              </h2>
            </div>

            <div className="w-full aspect-video rounded-xl border border-slate-800 relative overflow-hidden">
              <img
                src="/Project5.png"
                alt="ArtKart"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
                About The Project
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Artekart is a specialized e-commerce marketplace dedicated to preserving and selling culturally significant artifacts and traditional crafts. By connecting local artisans directly with a global audience, the platform ensures fair trade pricing and helps sustain traditional art forms that are culturally engaging and rich in history.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML","CSS","Javascript","MongoDB"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-slate-800 text-amber-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Project Links</h3>
              <a
                href="https://github.com/kevin-chaudhari/Artekart"
                target="_blank"
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
);


// 6. Refoodify
const Project6 = ({ onBack }) => (
  <section id="projects" className="c-space section-spacing">
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 animate-in fade-in zoom-in duration-300">
      <div className="max-w-5xl mx-auto">

        <button onClick={onBack} className="group flex items-center gap-2 text-green-400 mb-8 hover:text-green-300 transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                Refoodify
              </h1>
              <h2 className="text-2xl text-slate-400 font-light flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-500" />
                Food Waste Management
              </h2>
            </div>

            <div className="w-full aspect-video rounded-xl border border-slate-800 relative overflow-hidden">
              <img
                src="/Project6.jpg"
                alt="Refoodify"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
                About The Project
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Refoodify connects local restaurants and grocery stores with homeless shelters and food banks. The platform manages inventory logistics, schedules pickups via an Uber-like interface, and provides tax-deduction analytics for donors, successfully diverting over 5 tons of food waste in the pilot phase.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5","CSS3","JavaScript","PHP","Google API","IBM WatsonX"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-slate-800 text-green-300 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);


// -------------------------------------------------------------------
// MAIN PROJECT LIST
// -------------------------------------------------------------------

const ProjectsList = ({ onNavigate }) => {
  const projects = [
    {
      id: 1,
      title: "FinSense",
      subtitle: "AI Personal Finance Agent",
      description: "AI-powered financial insights with LangChain, Gemini and RAG.",
      tech: ["LangChain", "Gemini", "RAG", "FAISS"],
      color: "group-hover:text-blue-400",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-900/20",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Morbius",
      subtitle: "Disease Prediction System",
      description: "Medical-level disease prediction using ML models.",
      tech: ["Python", "ML", "React"],
      color: "group-hover:text-teal-400",
      border: "group-hover:border-teal-500/50",
      glow: "group-hover:shadow-teal-900/20",
      icon: Activity
    },
    {
      id: 3,
      title: "Serene Initiative",
      subtitle: "VR Mental Wellness Platform",
      description: "VR guided meditation for stress reduction.",
      tech: ["JS", "Three.js", "MySQL"],
      color: "group-hover:text-purple-400",
      border: "group-hover:border-purple-500/50",
      glow: "group-hover:shadow-purple-900/20",
      icon: Layers
    },
    {
      id: 4,
      title: "TruthGuard",
      subtitle: "Fake News Detection",
      description: "NLP trust verification using BERT.",
      tech: ["NLP", "TensorFlow", "BERT"],
      color: "group-hover:text-red-400",
      border: "group-hover:border-red-500/50",
      glow: "group-hover:shadow-red-900/20",
      icon: ShieldAlert
    },
    {
      id: 5,
      title: "ArtKart",
      subtitle: "Cultural E-Commerce",
      description: "Marketplace connecting artisans with global buyers.",
      tech: ["HTML", "JavaScript", "MongoDB"],
      color: "group-hover:text-amber-400",
      border: "group-hover:border-amber-500/50",
      glow: "group-hover:shadow-amber-900/20",
      icon: ShoppingBag
    },
    {
      id: 6,
      title: "Refoodify",
      subtitle: "Food Waste Management",
      description: "Logistics for surplus food donation.",
      tech: ["JavaScript", "Google API", "IBM WatsonX"],
      color: "group-hover:text-green-400",
      border: "group-hover:border-green-500/50",
      glow: "group-hover:shadow-green-900/20",
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="c-space section-spacing">
      <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Project Works
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of AI, VR, and full-stack projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className={`group relative h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${p.glow} ${p.border}`}
              >
                <div className="absolute top-6 right-6 text-slate-700 group-hover:text-white transition">
                  <ExternalLink className="w-5 h-5" />
                </div>

                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 ${p.color}`}>
                      <p.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl font-bold text-slate-100 ${p.color}`}>{p.title}</h3>
                    <p className="text-sm text-slate-500 font-mono mt-1 uppercase tracking-wider">{p.subtitle}</p>
                  </div>

                  <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                    {p.tech.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};


// -------------------------------------------------------------------
// MAIN CONTROLLER
// -------------------------------------------------------------------

const ProjectsPage = ({ onExit }) => {
  const [currentPath, setCurrentPath] = useState("root");
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Stop scroll on first load or refresh
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Do NOT scroll when going back to root (project list)
    if (currentPath === "root") return;

    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPath]);

  const toProject = (id) => setCurrentPath(`project${id}`);
  const toList = () => setCurrentPath("root");

  return (
    <div className="w-full">
      {currentPath === "root" && <ProjectsList onNavigate={toProject} />}
      {currentPath === "project1" && <Project1 onBack={toList} />}
      {currentPath === "project2" && <Project2 onBack={toList} />}
      {currentPath === "project3" && <Project3 onBack={toList} />}
      {currentPath === "project4" && <Project4 onBack={toList} />}
      {currentPath === "project5" && <Project5 onBack={toList} />}
      {currentPath === "project6" && <Project6 onBack={toList} />}
    </div>
  );
};

export default ProjectsPage;
