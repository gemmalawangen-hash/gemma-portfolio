import { motion } from 'motion/react';

export default function Home() {
  const expertise = [
    {
      title: "Virtual / Executive Assistant",
      icon: (
        <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      items: ["Calendar Management", "Email Triage & Sorting", "Travel Arrangements", "Invoicing & Reports"]
    },
    {
      title: "SMM",
      icon: (
        <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      items: ["Content Scheduling", "Graphic Design (Canva)", "Engagement & Growth", "Ad Management"]
    },
    {
      title: "Website Management",
      icon: (
        <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      items: ["CMS Updates", "Copywriting", "Platform Maintenance", "E-commerce Support"]
    },
    {
      title: "SEO Support",
      icon: (
        <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
      items: ["Keyword Research", "On-page Optimization", "Analytics Reporting", "Backlink Monitoring"]
    }
  ];

  const tools = {
    website: [
      { name: "WordPress", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0g9Sm0kGpOAdl645DQamvZgoMggXGfaBm5sLgopXnL3xWUB01VkrE7fVrOjopl3vrJUDGGrb65ro5VBEzRsclgrUyO_d1U9wt93RE6LyYPIpZl-jTZI7KksP5agC0LUwQdQbIpNSsu9ufCzXfVRAfO-oaC4f2t6C24bboI2BeAaY24SRJ1lyyq_0eE_7AF0axrwPhHzbgt7IKt1BlxNzEuqiOltEzsZpClw-Ik5sOiYJNUe7vXaaB5JFXkRykNIGfVCIW3QpAMW09" },
      { name: "Shopify", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXygMEqccjUy2A5PgRR9ikKQm020t0jnv0QXIJSc__TPhhS-GJtTTTvS39r3cE7afBW1_MvUyGXkWDbzoBauNCJGYNu3ZfTjZhdEPwHdjK9lKCUoG8DFCEP5QzXk-tEIpQ2m1T0EdcYFKdKM2K3dmXkmqiKAJCoG49sNhX4asXyv7sA281mdG0Rr8soUfQ6ktliebsUgNLQAyD_KVmc1Zp1rVGpwM0w2RRSmtrY-czB51DNJCKB_JpUkbI6I7AtQinuJWvoCTqTnqQ" },
      { name: "Wix", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn-w8qqSTROZWBAsHGYqxDwi8SZVTRu11BaxqPEj2qfQrrF7dP0FKKZrJvzFXiBzGkvN3WLHni5qy_2SdMZridBBALcT_vOyBLJYK8rwaUhQ3LH6hQY3zSm35omQWvaF908cskz-II9TsJi5kjYsHyii3TU7UsnWVCrWzC8c8wC5vyIOEnOxas9cHmvYTLEdAXtAWN0wAHB6Z4opUZSsBebHzGduYML6RH2zbKprL27xLDI0ggphECAAjOgEMcuNe8pXVuzDuMdrIU" },
      { name: "Webflow", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbQmXSAPDiCnO5CU_0Qd4z8Kgf_UyxObYEO9rFDYCAc8NUFpPhLkMBxDUYyP-iThxvrgYxdiavTrsvzXwbUPlKH--4ylED3R8WI4PvAZ4Fk2RcuGbL-PQVNzITsOoooeYQgmHIV4f8ZTTxl13bH7YPtShIs97CoJOVTORWqjcDkiAy4ls22kC7dFXVSvNwDMW-pwPO9Lg3hNQUql5ZFpo_kpV-7St1ngpt6BxfIFMpnu3hOProcoMmapAei8QjNzs8i0vD1WX33l4j" }
    ],
    social: [
      { name: "Canva", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmsszXzysf3Y4B2Jm2nzRK3RWaMt2H5_fChzEawg8y_w6AnrYItWbV2uCSOk4hgHOQu_rsapAwNaWfdDVfMe1jT8PITWKPwvOlrG7tHNX2OofWSmbZAY6rD8Lgou0ipFd9TKWlqKc_OeLYt0xJvxu9Bz5PBoEenRPogA_Wdp2L4cLZ7vhGUzbSXppOHTC8P1KoPT3eohU9Fwc80LGlB9AVVx-SJLyZznT9bMRl22W82sopodZD--GK05-tzPug78ZT44O7JlpyPBPB" },
      { name: "Buffer", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2wdseNjYiTyUirRFDJZJpnXXCNZb1vNPL_jMCzDr1UGDsFLTYMFAAkk55_DtD_WrKoOi914gIfrrdMt7eNGAneFE1OPzXPaRngsAW46aoVGWjiGeRcTCkbgsehs8MNllN69VothvL7HPrTjz9uG3uhYTg1jMhyAxS6JqoAhhTJq_ynWXkyu9rMvk0xtUWrj4YaaxkqtdyjpCPvsyKT39iShezrMZv5nHAucC8DhxV5359m9bM0rHBwrXlQx-sfljo4OTP539L3LQJ" },
      { name: "Later", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHWxg82jQ-IMo9y3uN-ORzZ3Kek7-1fZXJd1Qv8tyii9iVQ5WSYR_QvplUzgA6E3Iz30OcGrc1j145_802xdVqklT7ac7DI9L8CFgXsxvukgfQ6iBmDgKIO7MYlax04oZ2T86ASMKyl7x_NrkfL_OPf6fDSdQYHvB96Gva4qhbAnp0DxxS3k0bl6oPLj7QlEfJsLJ0XsmGE_iWbPmsGw-JqT3U9asz32fXnu64dCwpFRvz1yF9XG_03oMBpd8pM6k6tgLS02agDbra" },
      { name: "Figma", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwmDMD2Y9an4EpNYFsmB2WO94Y6ppHDFJkm-HGz9Agu0aIVHEApOxUlGOZ8DTXV1-nlmTxfUzg3XhgcWkBAnorZPGhHJmhxEOW6-s-UQY7Qih23NnJbSZ05yGLfRQbiQFLclGfZyntMQSUqUhp9kaAuJrt08GUA4S2jG2q3j_v1k9FhL1nloSSgQZNISAPCXmzzFImuVROJ_3nNCzzFR31EHZIKSkV-iqMkmWwgYEn0RAEldBjs0T-UaJWylLKXqZm1KfLF4jXem9G" }
    ],
    productivity: [
      { name: "Asana", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiyzz4bzu49GKUvqXWkfLPBLKTfQ_VRBoRB9Jr9_Wyb9PQU2ShrbVWRlG4gj7HktZJ1tYOrLNOhqejsPomkqdTMO-wbcBzX-jsSVL_RXAQ5WUbUDkZ14FhtFXRV3ZvSFAJ_oPafTMAxE1d4yDa1P3K2w8PmISMZC8tOZbb7ZmIJryy4Ajl4q8MWLkv35cJSEw39ADaeT564OHMA54PrpzCck7uDi09rBY4R8poV0IMl89GHMNyzI7Dtvx6_7DCVQJYejbPdsDBZvi0" },
      { name: "Notion", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqrvomBBzElXGM_o-u2XTxmC_8Tw5cYrW_ZgsSHPUcedsumg-_vL3rIWKWr4U-X2PQd83ANbS4QrlVSkhMygVBfGWx2xpyj9NKiQvx1MAfJV2LYCNUKrpjWVdApiKXnCxh9iwfAmir7uMHo_HC16jijLuLhcSIYuTAYhkt7s4AFkDZmWCE_Orw88V5HK9t7ojAF4qw7VQFCj0b-DfCBEFMHwi0M1z_RpXDwzlZuZOvLMilQxq5xP8OXfIVaH3qGFF5eE_8zHML-wdj" },
      { name: "Slack", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUKtiqL_R-qU_t7lMxLwZD71vuQsv8FFXqzdRhlgQrYhaukKCx5zu-Eu0KaWfiyIprXTfiWO16-bO_w0cxjGEwvmSjjwx-4wAaFx0xRaI35PXd1Nl_IPXhc6Fd3jEm7EjZSsM-ZA5rOVh6WuDOpl_WYzI4WkJwFTH-gfS_CidtVNUgDpg_8GN8xiW94N_KfuW2YHxsgvLYpRpLZq1-1DvIY1mL08O_2v_dTpgE97IJiVWzG5x4AfdjohMYpKP_LMixjvO7ldQd061-" },
      { name: "ClickUp", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAO-fjM--AXMVKNYEJlwguHjXt8FGKehjdSQt2_WbPQFNcoHuFITz3WBC8yMi3OPW39Vv-H48Cmnvy11gPaOTvycMYEpUZr7t4dBziopqSbfDahFrb7uE6ij6vGCjKwpuYxaAFLyh5uI1l8WWNWZK_zXXrtJ_VMDmcdoh2s-x49hQoyczffFi1eo9w9VFNAzMglj-uCws9gNxrzojEB_REoIQ1w9gwPwz8pJakpNxMjGW_cMiSb2ZqDJ9NJAoK8a84DJMZP9ZcizNz" }
    ]
  };

  const collaborators = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBVszVoNeOeo7aOq2z3zGNmLRgoCFG2UQVHjUHWME1nXbbNfdwiKfKNAqc5GoqBG0MrMW8dL4H9TN_2uw4RMBC6kS_dSMs6jB6RnxporDHvmPwGfn6GD9x4Zj-EIxBf0XxgpuhEMDNxRSUbfcLXYMrhJ95P0FpeZcMB9vmkrI5x0rRoby40hEOYLbzsHIEI2nI485XjmEZqgqCYCSTIt9Sg_vafFI0Jjz-A-E_0Yk7sKnNHxtgdEsLaABrO-VWN8B-3SlhkAOOWAvIf",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCzhyIua02gBSquLxJDKEETuSmOKN4Cnkf5nX55HkI0rvf3WHjVO7rMcep14XBsrvZt5My0VEYTb5SlAM9PhZ2470zVyMgxzOBYGbfqNr1YNxzykCfYMvByjbiD2sv-Fvo_fcBM7qgTBMV9Zuva2CO56wKS63zk7aoOBfrnMrW2UAY5ClztV4UGXr5es8iCfB1zsIjG-xGzthoNG-P1pdCmUMY2OzOx9D6TrnHc7B6ExgHIujr9pS4DglWNtthWr1SGs80o7eztyV4t",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAI29pdSC2zViN57mSaWell8iOcYuQD4xTQU4NeRzd7pvUQtuJIdUhjaT9zZEdSPFqdX--q1kyv_BneYJBEj6mENAHOk6DuvVK1FmAf2JWJKeIFkDtUBsLCtdBN2biKvrKbChEGCwlQOR4R37xQ_0M0AAaKWLnAXRBwK73a8WLyo5y7q9G9lrMZqvKAOlzNZQHlcy7BycMpclT_YEoexLIVT5Oy2zGYwtFN_XXIbIKzxnTjqKyaEoG_Nu4o0ULs7LmH34uGbobTHlDd",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtYgU5iyNEggG8Kp_8pRZjHdVtUQfGjysphK4qOpy-58C6PLLHITggicAkRpZOyfZFU1jOdUiSYVEX573RTXqtvfupNficXdhPrsu9uHkw4dTapSr909rA8ZRtQjNgjQcoqXUCRB0-KAFNMyPMg04W4Y_8AOeuifC_yYKeN_ZrOEg4v1bATYXJSArPJhelH86NKY0xYiOgStCqqgB88_rQMSHW3Tu4KbxFAgPfeWgYFpFEQo8xKruOT9erNN4fK9lMWWwLpPZorNqx",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcPs860SMx--raYVT2GIAjHJUsHSj_VBWnOKK21xZsAtPykfq3ihEtwBCVEBuaFbE_DoWJbUtrFSY2osjkGRD4Ewr3lGEa0gtyAwc8Mk4pQMbsiFo77ZXiYMq7IBxTJlJCfNCCfhk9oBir0Spp5d4P1zDgu51y3XjLtVg_J2aFaKxzugbaeWwtVsuaE1jj1LKCJ1Eu6-lxkJUSZP1RtGCshhrZ_gSitKzEMYRFhyxZbvClRUpTBPG6xLwugciOJfCgYUZLFm41AVJj"
  ];

  return (
    <div className="water-drop-texture min-h-screen">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-pink leading-tight">
              Gemma Lawangen
            </h1>
            <p className="text-xl md:text-2xl text-brand-orange font-medium tracking-wide">
              Virtual Assistant | Executive Assistant | SMM | Web & SEO Support
            </p>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Empowering entrepreneurs and business leaders by reclaiming their time. I provide the strategic backbone your business needs to scale through professional administrative and digital support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/portfolio" className="border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm min-w-[200px] text-center hover:bg-brand-pink hover:text-white transition-all duration-300">
                View My Work
              </a>
              <a href="/contact" className="bg-brand-pink text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm min-w-[200px] text-center hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-brand-pink/20">
                Let's Work Together
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-pastel-orange rounded-full animate-pulse opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Gemma Lawangen" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-pastel-orange rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-bounce"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Blobs */}
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-brand-light-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-brand-pastel-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      </header>

      {/* About Me */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-pink">Empowering your vision through strategic support.</h2>
            <div className="h-1 w-20 bg-brand-pastel-orange mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a dedicated Virtual Assistant with expertise in executive support, social media management, and technical web optimization, I bridge the gap between your big-picture goals and daily operations. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach is rooted in clean organization and vibrant creativity. Whether I'm managing complex calendars or optimizing SEO for your latest project, I bring a refined, artistic touch to every task.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-galaxy-gradient opacity-80 transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="border-2 border-white/30 w-full h-full rounded-2xl flex items-center justify-center">
                <span className="text-white font-serif italic text-2xl tracking-widest uppercase">Creativity & Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 md:px-12 bg-brand-light-orange/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-pink mb-4">My Expertise</h2>
            <p className="text-brand-orange uppercase tracking-widest font-bold text-sm">Tailored solutions for your business</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-pink h-full"
              >
                <div className="w-12 h-12 bg-brand-light-orange rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  {service.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-pink">Tools & Platforms</h2>
          </div>
          
          <div className="bg-brand-light-orange/20 p-12 rounded-3xl mb-12">
            <h3 className="text-center text-brand-orange font-bold uppercase tracking-widest mb-8">Website Tools</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {tools.website.map((tool, i) => (
                <img key={i} src={tool.url} alt={tool.name} className="h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl border border-brand-light-orange">
              <h3 className="text-center text-brand-orange font-bold uppercase tracking-widest mb-8">Social Media & Design</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {tools.social.map((tool, i) => (
                  <img key={i} src={tool.url} alt={tool.name} className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>
            <div className="bg-brand-light-orange/20 p-12 rounded-3xl">
              <h3 className="text-center text-brand-orange font-bold uppercase tracking-widest mb-8">Productivity</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {tools.productivity.map((tool, i) => (
                  <img key={i} src={tool.url} alt={tool.name} className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-brand-pink mb-12 italic">Brands I've Collaborated With</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {collaborators.map((url, i) => (
              <div key={i} className="relative p-1 bg-gradient-to-r from-brand-pink to-brand-pastel-orange rounded-full w-24 h-24 shadow-md">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-4">
                  <img src={url} alt={`Collaborator ${i+1}`} className="max-w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Works Preview */}
      <section className="py-24 px-6 bg-brand-light-orange/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-pink mb-4">Sample Works</h2>
            <p className="text-gray-500 italic">Explore a selection of my latest projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce Refresh", category: "Website Work", color: "bg-brand-pastel-orange" },
              { title: "Lifestyle Campaign", category: "Social Media", color: "bg-brand-pink" },
              { title: "SEO Strategy", category: "Marketing", color: "bg-brand-orange" }
            ].map((project, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-light-orange/50">
                <div className={`h-64 ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 opacity-40"></div>
                  <span className="relative z-10 text-white font-serif text-xl font-bold uppercase tracking-wider">{project.category}</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">Professional management and strategic growth solutions tailored to client needs.</p>
                  <a href="/portfolio" className="text-brand-pink font-bold text-xs uppercase tracking-widest hover:text-brand-orange">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-galaxy-gradient opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center p-10">
                <div className="w-16 h-1 w-24 bg-white/40 mx-auto mb-6"></div>
                <h3 className="text-3xl font-serif italic">The Art of Support</h3>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl font-serif text-brand-pink">Why Work With Me?</h2>
            <div className="space-y-4">
              {[
                { title: "Exemplary Attention to Detail", desc: "I handle the small tasks so you can focus on the big vision without worry.", color: "bg-brand-pink" },
                { title: "Dynamic Problem Solver", desc: "Complex schedules or tech hurdles are met with proactive solutions and calm execution.", color: "bg-brand-pastel-orange" },
                { title: "Aesthetic & Strategic Mindset", desc: "I combine visual creativity with data-driven strategies for a cohesive brand presence.", color: "bg-brand-orange" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`mt-1 w-6 h-6 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-brand-light-orange/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-brand-pink mb-6">Let's work together</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Ready to elevate your business operations and digital presence? <br className="hidden md:block"/>
            I’m currently accepting new clients for ongoing collaborations.
          </p>
          <div className="mb-10">
            <span className="block text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-2">Email Me Directly</span>
            <a className="text-2xl md:text-3xl font-light text-gray-800 hover:text-brand-pink transition-colors" href="mailto:gemma.lawangen@gmail.com">
              gemma.lawangen@gmail.com
            </a>
          </div>
          <a href="/contact" className="inline-block bg-brand-pink text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-brand-orange transition-all duration-300 shadow-xl shadow-brand-pink/20">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
