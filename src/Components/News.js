import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Sarah Fielding",
      title:
        "BMW brings its Digital Key Plus feature to Samsung Galaxy and Pixel phones",
      description:
        "BMW has announced Android smartphone owners can now use hands-free technology that opens your car with your phone. The feature, known as the Digital Key Plus, will be available on the Samsung Galaxy S23+, Galaxy S23 Ultra, Google Pixel 7 Pro and a range of ot…",
      url: "https://www.engadget.com/bmw-brings-its-digital-key-plus-feature-to-samsung-galaxy-and-pixel-phones-122534824.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg",
      publishedAt: "2023-04-25T12:25:34Z",
      content:
        "BMW has announced Android smartphone owners can now use hands-free technology that opens your car with your phone. The feature, known as the Digital Key Plus, will be available on the Samsung Galaxy … [+1551 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "UK bill could protect consumers from 'subscription traps' and fake reviews",
      description:
        "The UK's Competition and Markets Authority (CMA) has introduced a new bill that would give it the power slap the biggest tech companies with a fine worth billions if they don't comply with its rules. It's a multi-faceted bill that's aimed at protecting consum…",
      url: "https://www.engadget.com/uk-bill-could-protect-consumers-from-subscription-traps-and-fake-reviews-095558923.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/6L6HePy3d.EWSSl5xz0bjQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/583fa560-a703-11ed-9ded-448b8300fa76.cf.jpg",
      publishedAt: "2023-04-25T09:55:58Z",
      content:
        "The UK's Competition and Markets Authority (CMA) has introduced a new bill that would give it the power slap the biggest tech companies with a fine worth billions if they don't comply with its rules.… [+2840 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Steve Dent",
      title: "DJI's Mavic 3 Pro comes with a triple-camera setup",
      description:
        'DJI has unveiled its new flagship consumer drone, the Mavic 3 Pro, with a triple-camera setup that includes a new 70mm lens designed for "powerful subject framing." It also includes a new 10-bit D-Log M color mode, improvements in the tele cameras, and ProRes…',
      url: "https://www.engadget.com/djis-mavic-3-pro-comes-with-a-triple-camera-setup-130001265.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/XLY5Tc09ZOm7lkjzgL7exw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/52b65e30-e322-11ed-ad7b-4dc6d05a04ac.cf.jpg",
      publishedAt: "2023-04-25T13:00:01Z",
      content:
        'DJI has unveiled its new flagship consumer drone, the Mavic 3 Pro, with a triple-camera setup that includes a new 70mm lens designed for "powerful subject framing." It also includes a new 10-bit D-Lo… [+3933 chars]',
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jon Porter",
      title:
        "Spotify passes 500 million monthly active users for the first time",
      description:
        "Spotify has announced its current number of monthly active users and paid subscribers as part of its first quarter 2023 earnings report.",
      url: "https://www.theverge.com/2023/4/25/23695790/spotify-earnings-q1-2023-monthly-active-users-515-million",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/CKTAR2b2HRdXAwNzIApGXjHrpng=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951389/STK088_VRG_Illo_N_Barclay_6_spotify.jpg",
      publishedAt: "2023-04-25T10:29:35Z",
      content:
        "Illustration by Nick Barclay / The Verge\r\n\n \n\n Spotify says over half a billion people, 515 million to be exact, use its streaming service on a monthly basis as of March 31st. That’s an increase of 2… [+3172 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Steven Ewing",
      title: "Toyota Prius review: EV reality check",
      description:
        "The much-maligned Toyota Prius got a swanky makeover for the 2023 model. For car buyers who are unsure about the shift to electric, it remains an affordable and attractive alternative.",
      url: "https://www.theverge.com/23691342/toyota-prius-2023-review-hybrid-specs-photos-price",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/qkkizlZEE59NR_vXWj_o4kOd9PI=/0x0:2048x1365/1200x628/filters:focal(1024x683:1025x684)/cdn.vox-cdn.com/uploads/chorus_asset/file/24585530/236611_Toyota_Prius_review_AHawkins_00125.jpg",
      publishedAt: "2023-04-25T12:00:00Z",
      content:
        "Toyota’s fifth-generation Prius certainly has a lot to like.\r\n\n \n\n\n Until our public charging infrastructure can handle the demands of rapid EV adoption, the Toyota Prius offers no-hassle efficiency.… [+8483 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "techkritiko@gmail.com (Jay Bonggolto)",
      title: "1More Aero review: Solid ANC and spatial audio for cheap",
      description:
        "The 1More Aero are great-sounding true wireless earbuds at a fair price, making them an attractive alternative to Apple’s pricey AirPods Pro. However, not every element shines.",
      url: "https://www.androidcentral.com/accessories/audio/1more-aero-review",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/8bxGJZA5GTm73bbBtm22Re-1200-80.jpg",
      publishedAt: "2023-04-25T12:00:51Z",
      content:
        "Spatial audio is gaining immense popularity in the premium headphone market, with Apple and Sony being some of the most well-known brands. Previously, spatial audio was limited only to high-end heads… [+10251 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Zoe Williams",
      title:
        "How do you put a new lover to the test? See how they react when your dog bites your mother | Zoe Williams",
      description:
        "Pets have been known to tip the balance in many a promising relationship. Mine did its best with a scene straight out of Hammer HorrorTwo-thirds of people would dump a partner or forgo a second date if their dog or cat didn’t like the person, according to a p…",
      url: "https://www.theguardian.com/commentisfree/2023/apr/25/how-do-you-put-a-new-lover-to-the-test-see-how-they-react-when-your-dog-bites-your-mother",
      urlToImage:
        "https://i.guim.co.uk/img/media/873eef78b6ec4248b9fc3e2f9bd4c7ed5777b6a7/0_46_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=8ff1600d19aa5f62088314f88a85f143",
      publishedAt: "2023-04-25T06:00:29Z",
      content:
        "Two-thirds of people would dump a partner or forgo a second date if their dog or cat didnt like the person, according to a poll by Pets at Home.\r\nSingle people are dumb, unless they secretly love bei… [+1927 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Alex Hern",
      title:
        "Could this billion-pound ‘crack-down’ end fake reviews and subscription traps?",
      description:
        "Tech giants such as Google and Apple could face huge fines if they breach planned rules designed to protect consumers online. But will the bill have real teeth?<ul><li>Don’t get TechScape delivered to your inbox? Sign up for the full article here</li></ul>The…",
      url: "https://www.theguardian.com/technology/2023/apr/25/techscape-multibillion-digial-markets-bill-fake-reviews-internet-ripoffs",
      urlToImage:
        "https://i.guim.co.uk/img/media/74bb2e19af48b059f2ef86c6cb7cffd3bde9f8e4/0_262_3600_2161/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7fb76ff81f56f645f97d2856baa6a09e",
      publishedAt: "2023-04-25T10:59:42Z",
      content:
        "The British government hasnt yet succeeded in passing its flagship piece of internet regulation, but its about to introduce a second. Hot on the heels of the online safety bill comes the digital mark… [+7792 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Tim Spector",
      title:
        "Eat fibre first – and ditch the juice: five quick and easy tips for a much healthier meal",
      description:
        "Scientist and author Tim Spector shows how to make small but important changes to improve the way you eat – while still enjoying your foodWhilst researching my latest book, Food for Life, I learnt that we’re very short of practical advice on food choices whic…",
      url: "https://www.theguardian.com/food/2023/apr/25/eat-fibre-first-and-ditch-the-juice-five-quick-and-easy-tips-for-a-much-healthier-meal",
      urlToImage:
        "https://i.guim.co.uk/img/media/48704b1c0d1bae1317c9c76009292f4e15607f25/0_224_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=3ad3bf80552492c71e367d5a366a149a",
      publishedAt: "2023-04-25T07:00:30Z",
      content:
        "Whilst researching my latest book, Food for Life, I learnt that were very short of practical advice on food choices which are the most important things we can do for our health (humans and our gut mi… [+7073 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Apple, Google Could Face Large Fines Under New UK Digital Consumer Bill",
      description:
        "The UK's Competition and Markets Authority (CMA) has introduced a new bill that would allow it to impose multibillion-pound fines on major tech companies like Apple for breaching its rules.\n\n\n\n\n\nThe multifaceted bill is designed to promote competition and pro…",
      url: "https://www.macrumors.com/2023/04/25/tech-giants-fines-uk-digital-consumer-bill/",
      urlToImage:
        "https://images.macrumors.com/t/oNd60UHBH70Ze0PtFNPGSCa0cKQ=/1794x/article-new/2021/06/app-store-blue-banner-uk-fixed.jpg",
      publishedAt: "2023-04-25T11:49:25Z",
      content:
        "The UK's Competition and Markets Authority (CMA) has introduced a new bill that would allow it to impose multibillion-pound fines on major tech companies like Apple for breaching its rules.\r\nThe mult… [+2784 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "iPhones Made Up Nearly Half of All Refurbished Smartphone Sales in 2022",
      description:
        "Apple's sales of refurbished iPhones saw double-digit growth in 2022, further solidifying its dominance in the global market for returned and repackaged smartphones.\n\n\n\n\n\nAccording to Counterpoint Research (via DigiTimes), Apple's refurbished sales grew by 16…",
      url: "https://www.macrumors.com/2023/04/25/apple-iphone-refurb-sales-2022/",
      urlToImage:
        "https://images.macrumors.com/t/buER-ahS-NaY__r6VgXkA1MPOLg=/2878x/article-new/2022/09/refurb-iphone-12-mini.jpg",
      publishedAt: "2023-04-25T09:34:20Z",
      content:
        "Apple's sales of refurbished iPhones saw double-digit growth in 2022, further solidifying its dominance in the global market for returned and repackaged smartphones.\r\nAccording to Counterpoint Resear… [+1483 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Patrick Holland",
      title:
        "Google's Pixel Fold Seems Like a Sure Bet, but Where's the Foldable iPhone? - CNET",
      description:
        "Commentary: Here's why I think Apple hasn't released a foldable iPhone yet.",
      url: "https://www.cnet.com/tech/mobile/googles-pixel-fold-seems-like-a-sure-bet-but-wheres-the-foldable-iphone/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/d71c5fc5951697b2b621bdba71f991bebc0c2a90/hub/2021/03/05/ace9095d-12dd-4905-a259-e314f425fc8e/iphone-foldable-00000.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T13:32:41Z",
      content:
        "We're just weeks away from Google I/O, the company's annual software show, and all signs point to the search and ad giant launching its first foldable phone: the Pixel Fold. There are a number of rum… [+8564 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Shelby Brown",
      title:
        "Apple's New Headset Could Run 'Hundreds of Thousands' of iPad Apps, Report Says - CNET",
      description:
        "Apple's rumored AR/VR headset is going to be packed with new features.",
      url: "https://www.cnet.com/tech/apples-new-headset-could-run-hundreds-of-thousands-of-ipad-apps-report-says/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/f7433ad043245327929fc0c3c0dc0b57c548c4dc/hub/2022/12/07/b09c3b5c-4b37-4777-ad56-9d9f2067ccb0/apple-ar-vr-headset-virtual-reality-1548.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-04-25T14:28:22Z",
      content:
        "After years of rumors, Apple's AR/VR headset is expected to be unveiled at the tech giant's Worldwide Developers Conference in June. The headset will launch with a ton of features as Apple tries to e… [+1793 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Nina Raemont",
      title:
        "At $479, OnePlus' First Android Tablet Looks To Stand Out in the Crowd - CNET",
      description:
        "The OnePlus Pad will be available for preorder starting on Friday.",
      url: "https://www.cnet.com/tech/mobile/at-479-oneplus-first-android-tablet-looks-to-stand-out-in-the-crowd/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/25743834baa3ab6ea477c117529c8128819c401f/hub/2023/02/26/d045bc7e-d4b2-4cb8-818a-071a1ca22d95/oneplus-pad-tablet-cnet.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T15:24:31Z",
      content:
        "After being teased earlier this year, OnePlus' first tablet, the OnePlus Pad, will be available for preorder starting on Friday and cost $479, the company revealed on Tuesday. \r\nPeople can also purch… [+898 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Dashia Milden",
      title:
        "The Clock Is Ticking to Lock In a Long-Term CD: Why Experts Say You Shouldn't Wait - CNET",
      description:
        "The best savings and CD rates you see today may not be around in a few months, experts say.",
      url: "https://www.cnet.com/personal-finance/banking/the-clock-is-ticking-to-lock-in-a-long-term-cd-why-experts-say-you-shouldnt-wait-much-longer/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/3096966c54a06417313f202c981a1f3a1ea83d0c/hub/2023/04/24/f18c0776-faf1-4b51-b7e6-d23cd7203b73/gettyimages-1366450894.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T14:23:00Z",
      content:
        'After nearly a year of savings and CD interest rates steadily climbing, sky-high annual percentage yields are stalling -- and some are even starting to drop. \r\n"Banks are reducing interest rates on C… [+7147 chars]',
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Meara Isenberg",
      title:
        "'Scream 6': Streaming Release Date and How to Watch From Anywhere - CNET",
      description:
        "The slasher starring Melissa Barrera, Courteney Cox and Jenna Ortega is now on Paramount Plus.",
      url: "https://www.cnet.com/tech/services-and-software/scream-6-streaming-release-date-and-how-to-watch-the-film-from-anywhere/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/fff15db52be82d720c01f8000bc7d7605da00a4c/hub/2023/01/19/7241ab1c-0956-415d-8ad5-e974226d6dc7/scr6-03066-rv2b.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T15:05:00Z",
      content:
        "Ghostface terrorizes the Big Apple in Scream 6.\r\nParamount Pictures\r\nIf you've been debating going to a movie theater to watch Scream 6, a new option has crept up. Paramount Plus said Monday that sub… [+3400 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Apple Releases Updates to Apple Music and TV Preview Apps for Windows",
      description:
        "Apple has released updates for its Apple Music, Apple TV, and Apple Devices apps for PC users running Windows 11, bringing what appear to be notable improvements and bug fixes to the preview apps.\n\n\n\n\n\nLast year, Microsoft said that Apple Music and Apple TV a…",
      url: "https://www.macrumors.com/2023/04/25/apple-updates-windows-preview-apps/",
      urlToImage:
        "https://images.macrumors.com/t/UpIExTUMr8hxGDrdhdfyf3nXw1g=/1600x/article-new/2023/01/apple-music-preview-microsoft-store.jpg",
      publishedAt: "2023-04-25T12:20:11Z",
      content:
        "Apple has released updates for its Apple Music, Apple TV, and Apple Devices apps for PC users running Windows 11, bringing what appear to be notable improvements and bug fixes to the preview apps.\r\nL… [+1794 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Mitchel Broussard",
      title:
        "Deals: Apple's M1 iMac (8-Core/256GB) Gets Massive $499 Discount on Amazon, Available for $999.99",
      description:
        "Apple's M1 iMac (8-Core GPU, 256GB) has hit an all-time low price of $999.99 today on Amazon, down from $1,499.00. This sale has been coming and going since the weekend, so act fast if you're interested.\n\n\n\nNote: MacRumors is an affiliate partner with some of…",
      url: "https://www.macrumors.com/2023/04/25/deals-apples-m1-imac-256gb/",
      urlToImage:
        "https://images.macrumors.com/t/V9TnxRVOKrpS_Etw15XNaviA0F8=/2500x/article-new/2022/02/iMac-Deals-Red.jpg",
      publishedAt: "2023-04-25T14:51:38Z",
      content:
        "Apple's M1 iMac (8-Core GPU, 256GB) has hit an all-time low price of $999.99 today on Amazon, down from $1,499.00. This sale has been coming and going since the weekend, so act fast if you're interes… [+743 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Jaclyn Diaz",
      title:
        "A Nashville senior was banned from prom for a suit, so a local business stepped in",
      description:
        'B Hayes, an 18-year-old student at Nashville Christian School, was banned from going to their prom because they wore a suit and not a dress. The school said it "has established dress requirements."',
      url: "https://www.npr.org/2023/04/25/1171695996/nashville-senior-banned-from-prom-suit-dress",
      urlToImage:
        "https://media.npr.org/assets/img/2023/04/24/img_6053_wide-f99b506c213388cca08b14a2b1c119b448889a3f-s1400-c100.jpg",
      publishedAt: "2023-04-25T09:00:28Z",
      content:
        "Hayes stood outside of the prom holding a sign that read, \"they wouldn't let me in because i'm in a suit.\"\r\nB Hayes\r\nA student denied entry to their Nashville high school prom is getting another chan… [+3737 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Michaeleen Doucleff",
      title: "The truth about teens, social media and the mental health crisis",
      description:
        "A striking decline in teen mental health has coincided with the rise of smartphones and social media. Is social media causing the mental health challenges? Finally, research can answer that question.",
      url: "https://www.npr.org/sections/health-shots/2023/04/25/1171773181/social-media-teens-mental-health",
      urlToImage:
        "https://media.npr.org/assets/img/2023/04/24/gettyimages-1211994928_wide-e634545818a9857f85ba07e030ed875ef096e869-s1400-c100.jpg",
      publishedAt: "2023-04-25T13:28:04Z",
      content:
        "For years, the research picture on how social media affects teen mental health has been murky. That is changing as scientists find new tools to answer the question.\r\nOLIVIER DOULIERY/AFP via Getty Im… [+15289 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title:
        "Major Tech Firms Face Hefty Fines Under New Digital Consumer Bill",
      description:
        "Major tech firms face the threat of multibillion-pound fines for breaching consumer protection rules under new legislation that will tackle issues including fake online reviews and subscriptions that are difficult to cancel. From a report: The digital markets…",
      url: "https://tech.slashdot.org/story/23/04/25/144246/major-tech-firms-face-hefty-fines-under-new-digital-consumer-bill",
      urlToImage: "https://a.fsdn.com/sd/topics/uk_64.png",
      publishedAt: "2023-04-25T15:21:00Z",
      content:
        'The digital markets, competition and consumers bill will empower the UK\'s competition watchdog to tackle the "excessive dominance" that a small number of tech firms hold over consumers and businesses… [+770 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Cheryl Teh",
      title:
        "Jeff Bezos, accidental style icon, was spotted at Coachella in a butterfly-print button-down shirt",
      description:
        'Bezos was spotted at Coachella in a breezy blue butterfly button-down shirt that one Redditor likened to "a low budget Fast and Furious" look.',
      url: "https://www.businessinsider.com/bezos-coachella-butterfly-shirt-lauren-sanchez-2023-4",
      urlToImage:
        "https://i.insider.com/64476d216001ce001906392d?width=1200&format=jpeg",
      publishedAt: "2023-04-25T08:12:55Z",
      content:
        'Jeff Bezos.Cooper Neill/Getty Images\r\n<ul>\n<li>Amazon founder Jeff Bezos showed up at Coachella in a butterfly-print button-down shirt.</li>\n<li>His look drew comparisons to the "Fast and Furious" fr… [+2609 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Ethan Dodd",
      title:
        "Forget an MBA. This accountant has spent $250 to teach himself how to be a data analyst so he can get a $30,000 raise and buy a house.",
      description:
        "Once he has his Microsoft certification, Jeremy Peer expects to land a job making $30,000 more with no limit to moving up after that.",
      url: "https://www.businessinsider.com/college-isnt-necessary-get-pay-raise-data-analyst-job-microsoft-2023-4",
      urlToImage:
        "https://i.insider.com/644693c9120cd7001865da2d?width=1200&format=jpeg",
      publishedAt: "2023-04-25T10:00:07Z",
      content:
        "Jeremy Peer.Jeremy Peer\r\n<ul>\n<li>Jeremy Peer felt stuck at his $60,000 accounting salary but can't afford to go to business school.</li>\n<li>A TikTok account inspired him to pursue business analytic… [+6150 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Rubén Chicharro",
      title: "Spotify bate récords: supera los 500 millones de usuarios al mes",
      description:
        "Trimestre de récord para Spotify. La plataforma de streaming sueca ha superado sus expectativas al anunciar haber superado los 500 millones de usuarios activos al mes. El servicio, concretamente, cuenta con 515 millones de usuarios activos desde el pasado 31 …",
      url: "http://hipertextual.com/2023/04/spotify-supera-500-millones-usuarios-al-mes",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2023/01/spotify-2016-09-29.webp",
      publishedAt: "2023-04-25T11:49:22Z",
      content:
        "Trimestre de récord para Spotify. La plataforma de streaming sueca ha superado sus expectativas al anunciarhaber superado los 500 millones de usuarios activos al mes. El servicio, concretamente, cuen… [+3130 chars]",
    },
    {
      source: {
        id: "time",
        name: "Time",
      },
      author: "Sean Gregory",
      title: "Aaron Rodgers Can Only Do So Much",
      description:
        "The future Hall of Fame quarterback—and NFL lighting rod—is traded to the New York Jets, a team that regularly fumbles expectations",
      url: "https://time.com/6274288/aaron-rodgers-nfl-new-york-jets/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/04/Aaron-Rodgers-Jets.jpg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2023-04-25T03:00:05Z",
      content:
        "Aaron Rodgers chatter has overtaken the NFL, the most popular sports enterprise in America, in recent years. Whether it was his MVP-play or eye-popping contract extension or feud with his coach in Gr… [+5663 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Manu García (Visnuh)",
      title:
        "iPhone, iPad, MacBook, Apple Watch o AirPods rebajados: las mejores ofertas de los Apple Days de MediaMarkt",
      description:
        "Tras su Día sin IVA, MediaMarkt vuelve a la carga con una nueva entrega de sus Apple Days. Esta semana tienen interesantes descuentos para algunos modelos de iPhone, algún iPad o MacBook y en alguno de sus relojes y auriculares. Aquí te hemos reunido las mejo…",
      url: "https://www.xataka.com/seleccion/iphone-ipad-macbook-apple-watch-airpods-rebajados-mejores-ofertas-apple-days-mediamarkt",
      urlToImage: "https://i.blogs.es/878b51/apple_days/840_560.jpeg",
      publishedAt: "2023-04-25T14:00:42Z",
      content:
        "Tras su Día sin IVA, MediaMarkt vuelve a la carga con una nueva entrega de sus Apple Days. Esta semana tienen interesantes descuentos para algunos modelos de iPhone, algún iPad o MacBook y en alguno … [+6317 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Enrique Pérez",
      title:
        "Apple ha vuelto a ganar su juicio con Epic Games, pero es una victoria pírrica por los métodos de pago",
      description:
        "La batalla judicial entre Apple y Epic Games no ha terminado. En 2021, la Justicia estadounidense emitió su histórica sentencia, pero la compañía responsable de videojuegos como 'Fortnite' no quedó contento y apeló. Ahora los jueces han vuelto a pronunciarse …",
      url: "https://www.xataka.com/legislacion-y-derechos/apple-ha-vuelto-a-ganar-su-juicio-epic-games-victoria-pirrica-metodos-pago",
      urlToImage: "https://i.blogs.es/da5a72/epic-games/840_560.jpeg",
      publishedAt: "2023-04-25T09:00:45Z",
      content:
        "La batalla judicial entre Apple y Epic Games no ha terminado. En 2021, la Justicia estadounidense emitió su histórica sentencia, pero la compañía responsable de videojuegos como 'Fortnite' no quedó c… [+3138 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Ricardo Aguilar",
      title:
        "La OnePlus Pad ya tiene precio en España: a la caza del iPad por la mitad de dinero",
      description:
        "Hace dos meses OnePlus anunciaba su primera tablet: la OnePlus Pad. Un auténtico monstruo de gama alta que llegaba con uno de los mejores procesadores del mercado, un panel de alta resolución y compatibilidad con las tecnologías que se le piden a una tablet d…",
      url: "https://www.xataka.com/tablets/oneplus-pad-tiene-precio-espana-a-caza-ipad-mitad-dinero",
      urlToImage: "https://i.blogs.es/956c8b/1366_2000/840_560.jpeg",
      publishedAt: "2023-04-25T08:34:34Z",
      content:
        "Hace dos meses OnePlus anunciaba su primera tablet: la OnePlus Pad. Un auténtico monstruo de gama alta que llegaba con uno de los mejores procesadores del mercado, un panel de alta resolución y compa… [+2459 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Emma Colton",
      title:
        "Bias, deaths, autonomous cars: Expert says AI 'incidents' will double as Silicon Valley launches tech race",
      description:
        "The AI Incident Database, which tracks artificial intelligence incidents such as autonomous cars killing a pedestrian, says such incidents will likely double this year.",
      url: "https://www.foxnews.com/tech/bias-deaths-autonomous-cars-expert-says-ai-incidents-double-silicon-valley-launches-tech-race",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/aipic.png",
      publishedAt: "2023-04-25T11:00:09Z",
      content:
        'As Silicon Valley races to build powerful and popular artificial intelligence systems, troubling "incidents" ranging from convincing AI deepfakes, banking fraud, bias and even deaths will increase th… [+5742 chars]',
    },
    {
      source: {
        id: null,
        name: "Digital-photography-school.com",
      },
      author: "Jaymes Dempsey",
      title:
        "Anthropics PortraitPro 23 Review: The Best (and Fastest) Portrait Editor Money Can Buy",
      description:
        "The post Anthropics PortraitPro 23 Review: The Best (and Fastest) Portrait Editor Money Can Buy appeared first on Digital Photography School. It was authored by Jaymes Dempsey.\nEditing portraits is hard. As any experienced portraitist knows, high-level retouc…",
      url: "https://digital-photography-school.com/anthropics-portraitpro-23-review/",
      urlToImage:
        "https://digital-photography-school.com/wp-content/uploads/2023/04/anthropics-portraitpro-23-review-15.jpg",
      publishedAt: "2023-04-25T10:00:00Z",
      content:
        "A Post By: Jaymes Dempsey\r\nEditing portraits is hard. As any experienced portraitist knows, high-level retouching requires an array of unwieldy brushes, masks, and other tools, not to mention long mi… [+19034 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Trevor Mogg",
      title: "Apple has almost 50% of global refurbished smartphone market",
      description:
        "Apple captured about half of the refurbished smartphone market in 2022, followed by Samsung with 26% of the market, new data reveals.",
      url: "https://www.digitaltrends.com/mobile/apple-has-almost-50-of-global-refurbished-smartphone-market/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/09/iPhone-14-Pro-and-13-Pro-Back-CamerasJPG.jpg?resize=1200%2C630&p=1",
      publishedAt: "2023-04-25T05:15:05Z",
      content:
        "Skip to main content\r\nApple captured about half of the global refurbished smartphone market in 2022, followed by Samsung, which shared 26% of sales, according to data from research firm Counterpoint.… [+2379 chars]",
    },
    {
      source: {
        id: null,
        name: "Nitrokey.com",
      },
      author: null,
      title:
        "Smartphones with Qualcomm chip secretly send personal data to Qualcomm",
      description: "Comments",
      url: "https://www.nitrokey.com/news/2023/smartphones-popular-qualcomm-chip-secretly-share-private-information-us-chip-maker",
      urlToImage:
        "https://www.nitrokey.com/sites/default/files/field/image/rotesHandy-klein.png",
      publishedAt: "2023-04-25T10:21:28Z",
      content:
        "Summary\r\nDuring our security research we found that smart phones with Qualcomm chip secretly send personal data to Qualcomm. This data is sent without user consent, unencrypted, and even when using a… [+13963 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leo Becker",
      title:
        "Fehlendes Frühjahr-Event 2023: Warum Apple aus dem Takt geraten ist",
      description:
        "Verspätete Macs und eine fehlende Frühjahrs-Keynote: Apple hat das Jahr 2023 ungewöhnlich begonnen. Dafür gibt es mehrere Gründe.",
      url: "https://www.heise.de/news/Fehlendes-Fruehjahr-Event-2023-Warum-Apple-aus-dem-Takt-geraten-ist-8978519.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/9/2/5/4/Apple_2023-4547c24f6cd188cd.jpeg",
      publishedAt: "2023-04-25T13:31:00Z",
      content:
        "Inhaltsverzeichnis\r\nDas gab es bei Apple seit weit über einem Jahrzehnt nicht mehr: Gleich zum Jahresbeginn ist mit MacBook Pro und Mac mini neue Hardware erschienen, obwohl der Hersteller die Wochen… [+5226 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Andreas Knobloch",
      title:
        "Dienstag: US Supreme Court weist eine Klage ab und nimmt andere an",
      description:
        "Keine Patente durch KI-Systeme + Social-Media-Sperren + Apple wird zur Bank + Starship-Startrampe ist Schrott + Sonnensturm sorgt für Polarlichter",
      url: "https://www.heise.de/news/Dienstag-US-Supreme-Court-weist-eine-Klage-ab-und-nimmt-andere-an-8977759.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/8/8/4/9/Wochentage-source-sans-b8b422bfb5d1f10a.png",
      publishedAt: "2023-04-25T04:30:00Z",
      content:
        "Viel Arbeit für den US Supreme Court. Der Oberste Gerichtshof der USA lehnte am Montag ab, eine Klage eines Informatikers zu behandeln, der Erfindungen seines KI-Systems patentieren lassen wollte. In… [+4216 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title:
        "Streit mit Apple um App Store: Epic verliert vor US-Bundesgericht",
      description:
        "Der seit Jahren international ausgetragene Streit um eine Öffnung des App Store geht weiter. In den USA verlor nun Epic zum zweiten Mal.",
      url: "https://www.heise.de/news/Streit-mit-Apple-um-App-Store-Epic-verliert-vor-US-Bundesgericht-8978390.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/9/1/8/6/shutterstock_1906126804-3eadb46fc9f2c5ba.jpg",
      publishedAt: "2023-04-25T11:49:00Z",
      content:
        "Inhaltsverzeichnis\r\nIm in mehreren Ländern ausgetragenen Rechtsstreit zwischen dem Spielekonzern Epic Games und dem iPhone-Hersteller Apple um die Öffnung von dessen Softwareplattform hat der Game-An… [+2956 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "macOS: Welchen Namen bekommt Version 14?",
      description:
        "Am 5. Juni wird das nächste Mac-Betriebssystem gezeigt. Wie dieses heißen könnte, zeigt eine nun aufgetauchte Kandidatenliste.",
      url: "https://www.heise.de/news/macOS-Welchen-Namen-bekommt-Version-14-8978131.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/9/0/5/0/Apple-WWDC22-macOS-Ventura-Spotlight-photos-220606_big.jpg.large_2x-9186ce3a2a8ca05b.png",
      publishedAt: "2023-04-25T11:32:00Z",
      content:
        "Nicht mehr lange und die Apple-Entwicklerkonferenz WWDC 2023 geht über die Bühne: Am 5. Juni ist die Keynote eingeplant. Bereits gesetzt ist wohl, dass Apple seine neuen Betriebssysteme zeigt so ist … [+2318 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Christof Windeck",
      title:
        "heise+ | Mini-PC im Test: Intel NUC13AN mit Mobilprozessor Core i7-1360P",
      description:
        "Die 13. Generation der Intel-Minicomputer bringt kleine Verbesserungen. Neuerungen gibts bei BIOS-Updates und für Spezialanwendungen wie digitale Anzeigetafeln.",
      url: "https://www.heise.de/tests/Mini-PC-im-Test-Intel-NUC13AN-mit-Mobilprozessor-Core-i7-1360P-8969439.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/4/3/3/7e5bc271c720a830fcb7fd3c5acc26ba0c586b546de6eef4dcecbe6d6b1f1a68_1-2ce9803eea11a9f5.jpg",
      publishedAt: "2023-04-25T15:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nZwar sinken derzeit die PC-Verkaufszahlen, doch Minirechner gehören weiterhin zu den beliebteren Bauformen. Intel schickt unverdrossen eine neue Generation der NUC-Baureihe ins Re… [+2941 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Daniel Clören",
      title: "DJI Mavic 3 Pro: Neue Drohne mit drei Kameras",
      description:
        "Dank drei Kameras soll man bei DJIs neuer Macic 3 Pro im Flug zwischen verschiedenen Brennweiten wechseln und auch weit entfernte Objekte aufnehmen können.\r\n​",
      url: "https://www.heise.de/news/DJI-Mavic-3-Pro-Neue-Drohne-mit-drei-Kameras-8978028.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/8/9/9/1/O6KS1JfI-785cdbed575e0f0c.jpeg",
      publishedAt: "2023-04-25T13:00:00Z",
      content:
        "Inhaltsverzeichnis\r\nMit der Mavic 3 Pro bringt DJI im Mai die nach eigenen Angaben weltweit erste Consumer-Drohne mit drei Kameras auf den Markt. Dabei setzt das Unternehmen auf ein Hasselblad-Modell… [+3859 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Malte Kirchner",
      title:
        "iOS-Emulator für Android: Wie Super Monkey Ball wieder zum Leben erweckt wurde",
      description:
        "Ein Entwickler hat den Emulator TouchHLE für Android-Geräte portiert. Damit können frühe iPhone-Spiele wieder zum Leben erweckt wurden – zumindest einige.",
      url: "https://www.heise.de/news/iOS-Emulator-fuer-Android-Wie-Super-Monkey-Ball-wieder-zum-Leben-erweckt-wurde-8978623.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/9/3/2/9/Bildschirmfoto_2023-04-25_um_15.21.18-c757d44c5dd33ed0.png",
      publishedAt: "2023-04-25T13:33:00Z",
      content:
        'Einem Entwickler ist es gelungen, ältere iPhone-Spiele auf Android-Smartphones zum Laufen bringen. Der nach eigener Auskunft in Paris lebende Programmierer, der sich auf Twitter "ciciplusplus" nennt,… [+2261 chars]',
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Eva-Maria Weiß",
      title: "Sängerin Grimes gibt ihre Stimme für KI-Songs frei",
      description:
        "Die Sängerin Grimes gibt ihre Stimme für KI-Songs frei. Im Gegenzug will sie 50 Prozent Lizenzgebühren, wenn Lieder erfolgreich sind.",
      url: "https://www.heise.de/news/Saengerin-Grimes-gibt-ihre-Stimme-fuer-KI-Songs-frei-8977972.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/8/9/6/1/shutterstock_606719909-4dd541154507936b.jpg",
      publishedAt: "2023-04-25T09:20:00Z",
      content:
        'Während das Gros der Musikindustrie versucht, gegen Musik von Künstlicher Intelligenz anzugehen, gibt die Musikerin Grimes ihre Stimme zur Nutzung frei. "Ich teile die Lizenzgebühren zu 50 Prozent be… [+2620 chars]',
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Detlef Borchers",
      title:
        "Zahlen, bitte! Berechnungen über 17 Rädchen: Die erste Rechenmaschine der Welt",
      description:
        "Der Tübinger Mathematiker Wilhelm Schickard schuf 1623 die erste Rechenmaschine. Sie gilt als verschollen, konnte aber nach Beschreibungen rekonstruiert werden.",
      url: "https://www.heise.de/hintergrund/Zahlen-bitte-Berechnungen-ueber-17-Raedchen-Die-erste-Rechenmaschine-der-Welt-8977930.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/8/9/3/9/ZahlenBitte_normal_10__1_-3749189b08afb65b.png",
      publishedAt: "2023-04-25T11:37:00Z",
      content:
        "Inhaltsverzeichnis\r\nIm Jahr 1623 arbeitete der Tübinger Mathematiker und Astronom Wilhelm Schickard an der Konstruktion einer Rechenmaschine. Von den damals gebauten Maschinen ist keine erhalten gebl… [+7195 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title: "Apple @ Work: The identity problem in K-12 is solved with Clever",
      description:
        "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Businesses to easily and automatically deploy, manage & protect all…",
      url: "https://9to5mac.com/2023/04/25/clever/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/08/Apple-at-Work.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T10:00:00Z",
      content:
        "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Busines… [+515 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Apple faces new legal requirements in UK, but likely easy to satisfy",
      description:
        "Tech giants including , Google and Apple face new legal requirements in the UK, under new legislation being introduced today.\nWhile the penalties for breaching the planned law are severe – up to 10% of global turnover – Apple will likely find it relatively ea…",
      url: "https://9to5mac.com/2023/04/25/apple-faces-new-law/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-faces-new-legal-requirements.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T11:52:36Z",
      content:
        "Tech giants including Amazon, Google, and Apple face new legal requirements in the UK, under new legislation being introduced today.\r\nWhile the penalties for breaching the planned law are severe up t… [+3046 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title:
        "Jamf’s special event unveils new offerings to streamline Apple device management and extends Jamf Safe Internet to Windows",
      description:
        "Today, Jamf held a special event, which was live-streamed for all its customers, and covered a wide range of updates aimed at providing assistance to businesses, schools, and government entities in using Apple products and securing devices that run on Android…",
      url: "https://9to5mac.com/2023/04/25/jamfs-special-event-unveils-new-offerings-to-streamline-apple-device-management-and-extends-jamf-safe-internet-to-windows/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Jamf-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T14:00:00Z",
      content:
        "Today, Jamf held a special event, which was live-streamed for all its customers, and covered a wide range of updates aimed at providing assistance to businesses, schools, and government entities in u… [+5952 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Spotify paid subscriptions grew faster than expected, but the company is still losing money",
      description:
        "Spotify paid subscriptions grew faster than expected in the first quarter of the year, but the company is still losing money.\nThe good news for the streaming giant is that paid subscriptions were up 15% to 210M, ahead of analyst expectations and the company’s…",
      url: "https://9to5mac.com/2023/04/25/spotify-paid-subscriptions/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Spotify-paid-subscriptions.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T12:40:48Z",
      content:
        "Spotify paid subscriptions grew faster than expected in the first quarter of the year, but the company is still losing money.\r\nThe good news for the streaming giant is that paid subscriptions were up… [+2337 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Rikka Altland",
      title:
        "Deals: 10.9-inch iPad lands at $399, Anker and Twelve South Mac accessories, more",
      description:
        "A fresh batch of discounts are now live courtesy of 9to5Toys, this time headlined by an all-time low on Apple’s latest 10.9-inch iPad at $399. MacBook owners will then want to check out Twelve South’s matte black Curve stand as it falls to the best price of t…",
      url: "https://9to5mac.com/2023/04/25/10-9-inch-ipad-twelve-south-sale-more/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/ipad-10.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T15:47:40Z",
      content:
        "A fresh batch of discounts are now live courtesy of 9to5Toys, this time headlined by an all-time low on Apples latest 10.9-inch iPad at $399. MacBook owners will then want to check out Twelve Souths … [+4161 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Yelp launches AI search review highlights and suggestions, $2,500 guarantee, ‘Surprise Me’ feature",
      description:
        "Yelp is out with some major updates today including AI-powered review highlights and search suggestions to make it easier to find what you’re looking for, a $2,500 guarantee for services purchases through the platform, a new “Surprise Me” option for finding a…",
      url: "https://9to5mac.com/2023/04/25/yelp-launches-ai-search-review-and-more/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/yelp-major-update.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T13:57:41Z",
      content:
        "Yelp is out with some major updates today including AI-powered review highlights and search suggestions to make it easier to find what you’re looking for, a $2,500 guarantee for services purchases th… [+2814 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Rajesh Pandey",
      title: "Your Android phone might be making accidental 911 calls",
      description:
        "When a life-saving feature becomes a source of headache for first responders",
      url: "https://www.androidpolice.com/your-android-phone-making-accidental-911-calls/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/03/hand-held-pixel-6a-personal-safety-app-1.jpg",
      publishedAt: "2023-04-25T11:06:42Z",
      content:
        "The best Android smartphones are more than just about their big displays, high-resolution cameras, and insane charging speeds. With features like the Personal Safety app and Emergency SOS, they can a… [+1773 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Stephen Perkins",
      title: "How to create a Venmo account",
      description:
        "Venmo is one of the most popular peer-to-peer payment apps, which lets you square up with your friends immediately.",
      url: "https://www.androidpolice.com/create-venmo-account-explainer/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/05/venmo-hero.png",
      publishedAt: "2023-04-25T10:35:16Z",
      content:
        "If you've ever wanted to quickly send funds to someone without jumping through hoops, Venmo is a popular option. As a mobile payment platform, you can use Venmo on your smartphone to securely send an… [+9061 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "Apple will need to rely on screens made in Korea for a long time, while it moves efforts in-house",
      description:
        "Apple will continue to rely on Korean display makers like Samsung Display and LG Display for years to come despite a move to bring component designs in-house, a report claims.A miniLED backplane [Apple]Apple has gradually been bringing much more of the work t…",
      url: "https://appleinsider.com/articles/23/04/25/apple-will-need-to-rely-on-screens-made-in-korea-for-a-long-time-while-it-moves-efforts-in-house",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54137-109075-47492-92708-40443-82083-ipad-pro-129-mini-led-xl-xl-xl.jpg",
      publishedAt: "2023-04-25T11:13:02Z",
      content:
        "A miniLED backplane [Apple]\r\nApple will continue to rely on Korean display makers like Samsung Display and LG Display for years to come despite a move to bring component designs in-house, a report cl… [+2354 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "Apple TV+'s 'Reluctant Traveler' Eugene Levy gets a second season",
      description:
        'Apple has renewed the Apple TV+ travel series "The Reluctant Traveler With Eugene Levy" for a second season.Eugene Levy in "The Reluctant Traveler" [Apple TV+]The first season of the Emmy Award-winning Eugene Levy-fronted travelogue landed on Apple TV+ on Feb…',
      url: "https://appleinsider.com/articles/23/04/25/apple-tvs-reluctant-traveler-eugene-levy-gets-a-second-season",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54135-109074-51932-103023-Eugene-levy-reluctant-traveler-xl-xl.jpg",
      publishedAt: "2023-04-25T10:30:38Z",
      content:
        'Eugene Levy in "The Reluctant Traveler" [Apple TV+]\r\nApple has renewed the Apple TV+ travel series "The Reluctant Traveler With Eugene Levy" for a second season. \r\nThe first season of the Emmy Award-… [+1209 chars]',
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple diversifies MacBook production with new China supplier",
      description:
        "As Apple looks to move its manufacturing to India and Vietnam, it is still expanding the Chinese firms it uses for the MacBook Pro.Most of the news about Apple working to diversify its manufacturing base and reduce over-reliance on any one supplier, have been…",
      url: "https://appleinsider.com/articles/23/04/25/apple-diversifies-macbook-production-with-new-china-supplier",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54138-109076-000-lead-Macbook-Pro-xl.jpg",
      publishedAt: "2023-04-25T11:32:38Z",
      content:
        "As Apple looks to move its manufacturing to India and Vietnam, it is still expanding the Chinese firms it uses for the MacBook Pro.\r\nMost of the news about Apple working to diversify its manufacturin… [+1043 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple Store crash driver pleads not guilty to second-degree murder",
      description:
        "Bradley Rein, who drove an SUV into an Apple Store in Hingham, has appeared in Massachusetts Superior Court, pleading not guilty to 25 charges.Source: AP Photo/Steven SenneRein drove the car into the Apple Derby Street store in November, killing one person an…",
      url: "https://appleinsider.com/articles/23/04/25/apple-store-crash-driver-pleads-not-guilty-to-second-degree-murder",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51514-101985-000-lead-SUV-crash-xl.jpg",
      publishedAt: "2023-04-25T10:34:15Z",
      content:
        "Source: AP Photo/Steven Senne\r\nBradley Rein, who drove an SUV into an Apple Store in Hingham, has appeared in Massachusetts Superior Court, pleading not guilty to 25 charges.\r\nRein drove the car into… [+1355 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Jess Pingrey)",
      title:
        "Daily deals: iPhones & Apple Watches from $70, $1,200 off M1 Max MacBook Pro, 34% off Meta Quest 2, more",
      description:
        "Today's top deals include 42% off a 16TB WD Elements desktop external hard drive, Phillps Hue lights from $25, $230 off a HP 15.6\" ProBook laptop, and 80% off Skullcandy Indy Fuel wireless Bluetooth earbuds.Save $1,200 on a 2021 MacBook Pro The AppleInsider t…",
      url: "https://appleinsider.com/articles/23/04/25/daily-deals-iphones-apple-watches-from-70-1200-off-m1-max-macbook-pro-34-off-meta-quest-2-more",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54132-109077-daily-deals-april-25-xl.jpg",
      publishedAt: "2023-04-25T14:15:25Z",
      content:
        "Save $1,200 on a 2021 MacBook Pro \r\nToday's top deals include 42% off a 16TB WD Elements desktop external hard drive, Phillps Hue lights from $25, $230 off a HP 15.6\" ProBook laptop, and 80% off Skul… [+3085 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title:
        "DJI releases a triple-camera system on a new drone for photographers",
      description:
        "DJI has recently released the Mavic 3 Pro, a drone with three cameras to capture footage in different focal lengths to support multiple photography situations.DJI Mavic Pro 3The Mavic 3 Pro enables creators to explore their creativity thanks to its Hasselblad…",
      url: "https://appleinsider.com/articles/23/04/25/dji-releases-a-triple-camera-system-on-a-new-drone-for-photographers",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54142-109093-Mavic-3-Pro-lifestyle-5-xl.jpg",
      publishedAt: "2023-04-25T14:29:44Z",
      content:
        "DJI Mavic Pro 3\r\nDJI has recently released the Mavic 3 Pro, a drone with three cameras to capture footage in different focal lengths to support multiple photography situations.\r\nThe Mavic 3 Pro enabl… [+1759 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "The UK's Digital Markets Unit may finally get its regulatory powers after all",
      description:
        "After three years, the UK's Digital Markets Unit is edging closer to gaining powers to crack down on big tech companies, with draft legislation set to be introduced to parliament on Tuesday.UK ParliamentThe Digital Markets Unit has existed since 2021 as a par…",
      url: "https://appleinsider.com/articles/23/04/25/the-uks-digital-markets-unit-may-finally-get-its-regulatory-powers-after-all",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54139-109079-48836-95405-000-lead-UK-xl-xl.jpg",
      publishedAt: "2023-04-25T12:58:44Z",
      content:
        "UK Parliament\r\nAfter three years, the UK's Digital Markets Unit is edging closer to gaining powers to crack down on big tech companies, with draft legislation set to be introduced to parliament on Tu… [+3807 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (AppleInsider Staff)",
      title:
        "VogDUO's magnetic wireless car charger for iPhone adds class with leather",
      description:
        "VogDUO's Magnetic Wireless Car Charger for iPhone combines utility and style for a luxury charging experience with a sleekly-designed MagSafe-compatible charger for use inside a vehicle.The VogDUO Magnetic Wireless Car Charger uses genuine leather from Europe…",
      url: "https://appleinsider.com/articles/23/04/25/vogduos-magnetic-wireless-car-charger-for-iphone-adds-class-with-leather",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53540-107879-Vogduoheader2-xl.jpg",
      publishedAt: "2023-04-25T12:14:19Z",
      content:
        "The VogDUO Magnetic Wireless Car Charger uses genuine leather from Europe for a premium finish.\r\nVogDUO's Magnetic Wireless Car Charger for iPhone combines utility and style for a luxury charging exp… [+5207 chars]",
    },
    {
      source: {
        id: null,
        name: "Macworld",
      },
      author: "Jason Cross",
      title:
        "Apple’s Reality Pro headset explained: What do AR, VR, and MR mean?",
      description:
        "Macworld\n\n\n\r\n\n\n\n\nApple’s about to unleash its most important new product in a decade. Reality Pro, as it is rumored to be called, will be a VR headset like none other. No, I mean an AR headset. Wait, make that an MR headset with a dial to switch between AR an…",
      url: "https://www.macworld.com/article/1792115/apples-reality-pro-headset-explained-what-do-ar-vr-and-mr-mean.html",
      urlToImage:
        "https://www.macworld.com/wp-content/uploads/2023/04/Ahmed-Chenni-Apple-Headset.jpg?quality=50&strip=all&w=1024",
      publishedAt: "2023-04-25T11:15:00Z",
      content:
        "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nApple’s about to unl… [+7970 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Manuel Ramírez",
      title:
        "DJI Mavic 3 Pro llega a España: el primer dron del mundo con tres cámaras, una de Hasselblad",
      description:
        "Si buscas un dron bien equipado en sus cámaras, el nuevo DJI Mavic 3 Pro es toda una delicia para poder tomar fotografías desde los tres objetivos que monta. Uno de ellos es una cámara Hasselblad con gran angular.",
      url: "https://www.elespanol.com/elandroidelibre/moviles-android/accesorios/20230425/dji-mavic-pro-espana-primer-camaras-hasselblad/758924308_0.html",
      urlToImage:
        "https://s1.eestatic.com/2023/04/25/elandroidelibre/moviles-android/accesorios/758934589_232680277_1200x630.jpg",
      publishedAt: "2023-04-25T13:00:00Z",
      content:
        "A la espera de que Ring lance en España ese dron vigilante que es capaz de volar sobre los interiores de nuestro hogar, nos quedamos hoy con el lanzamiento del DJI Mavic 3 Pro, un dron que tiene el g… [+3842 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Adrián Raya",
      title:
        "Por fin puedes usar el móvil como llave para el coche: estos son los modelos compatibles",
      description:
        "Un año después del iPhone, los primeros móviles Android ya son compatibles con la llave digital de BMW, que permite abrir el coche de manera automática.",
      url: "https://www.elespanol.com/elandroidelibre/20230425/puedes-usar-movil-llave-coche-modelos-compatibles/758924106_0.html",
      urlToImage:
        "https://s1.eestatic.com/2023/04/25/elandroidelibre/758934125_232665066_1200x630.jpg",
      publishedAt: "2023-04-25T06:34:40Z",
      content:
        "Nuestros coches y nuestros móviles van a compaginar como nunca. La popularización de Android Auto permite muchas posibilidades de conexión con un smartphone y con sus apps y servicios, pero eso es só… [+3426 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "メディアジーンメディアコマース",
      title:
        "【AmazonGWセール】Apple、ソニー、Anker、Bose、オーディオテクニカ。おすすめのオーディオ機器はこちら！",
      description:
        "Amazon（アマゾン）では、2023年4月22日9時から4月25日23時59分まで｢Amazonゴールデンウィークセール｣を開催中。\n\n現在、AppleのAirPodsが14%オフやSonyのノイズキャンセリングイヤホンが21%オフなど、今すぐ使えるアイテムがお買い得に登場しています。",
      url: "https://www.gizmodo.jp/2023/04/amazon-timesale-fes-2023-0425-1.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2023/04/25/GZ.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2023-04-25T04:45:00Z",
      content:
        "Amazon202342294252359Amazon\r\nAppleAirPods14%Sony21%\r\nKindle200Kindle Unlimited299\r\n202342511\r\nAmazon5,0001,000\r\n10,000 14\r\n30\r\nApple AirPods \r\n33Bose\r\nAmazon10,00014\r\nAmazon\r\nAmazon4252359\r\nSource:Am… [+3 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Scott Stein",
      title: "How You Might Use Snapchat AR Without Even Realizing It - CNET",
      description:
        "Snap's face filters and AR mirrors are moving outside of its app. Is this part of getting the world ready for a future of AR glasses?",
      url: "https://www.cnet.com/tech/computing/how-you-might-use-snapchat-ar-without-even-realizing-it/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/74173be6388f96c6f2032702dc02aa5a6456f223/hub/2023/04/24/9cc3abe7-927f-4c2b-9de1-6017e790fffa/ar-cartoon-mirror-lens.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T12:00:17Z",
      content:
        "You step into a store to look for some new shirts. They don't have the one you want, but there's a mirror hanging on the wall. It shows an image of you with the shirt you want, projected onto your bo… [+4727 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Amandine Jonniaux",
      title:
        "Apple remporte finalement son procès contre Epic Games, ça change quoi ?",
      description:
        "Fin de la partie pour Epic, Apple fait Top 1. \nApple remporte finalement son procès contre Epic Games, ça change quoi ?",
      url: "https://www.journaldugeek.com/2023/04/25/apple-remporte-finalement-son-proces-contre-epic-games-ca-change-quoi/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2021/12/apple-app-store-awards-2021-hero-12022021-screen-e1644308275554.png",
      publishedAt: "2023-04-25T08:00:57Z",
      content:
        "Fin de la partie pour Epic, Apple fait Top 1.L’imbroglio judiciaire qui oppose Apple à Epic Games depuis trois ans vient de prendre fin. Après une nouvelle délibération en appel, le juge américain ch… [+3057 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Tristan",
      title: "iPhone 15 Pro Max : Apple veut rattraper Samsung et son zoom x10",
      description:
        'Apple pourrait ajouter un "periscope" sur l\'appareil photo de son prochain iPhone Pro Max. Une technologie permettant un zoom optique x6. \niPhone 15 Pro Max : Apple veut rattraper Samsung et son zoom x10',
      url: "https://www.journaldugeek.com/2023/04/25/iphone-15-pro-max-apple-veut-rattraper-samsung-et-son-zoom-x10/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/concept-iphone-15.jpg",
      publishedAt: "2023-04-25T11:30:06Z",
      content:
        'Apple pourrait ajouter un "periscope" sur l\'appareil photo de son prochain iPhone Pro Max. Une technologie permettant un zoom optique x6.Samsung, Huawei, Xiaomi, ces trois constructeurs proposent déj… [+2526 chars]',
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Rédacteur Invité",
      title:
        "Pas d’inflation chez Apple : la marque pulvérise le prix des AirPods",
      description:
        "Les clients se sont déjà rués sur cette offre, alors il faut en profiter maintenant : il n'en restera plus d'ici ce soir.\nPas d’inflation chez Apple : la marque pulvérise le prix des AirPods",
      url: "https://www.journaldugeek.com/2023/04/25/pas-inflation-apple-marque-pulverise-prix-airpods/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2023/04/airpods.jpg",
      publishedAt: "2023-04-25T13:52:30Z",
      content:
        "Les clients se sont déjà rués sur cette offre, alors il faut en profiter maintenant : il n'en restera plus d'ici ce soir.Incroyable mais vrai : les AirPods de troisième génération sont en ce moment p… [+5424 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Thomas Estimbre",
      title: "DJI Mavic 3 Pro : voici le premier drone DJI à trois caméras",
      description:
        "DJI lève officiellement le voile sur le Mavic 3 Pro, son nouveau drone phare doté d'un système à trois caméras.\nDJI Mavic 3 Pro : voici le premier drone DJI à trois caméras",
      url: "https://www.journaldugeek.com/2023/04/25/dji-mavic-3-pro-voici-le-premier-drone-dji-a-trois-cameras/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2023/04/dji-mavic-3-pro-lifestyle-3.jpg",
      publishedAt: "2023-04-25T13:00:16Z",
      content:
        "DJI lève officiellement le voile sur le Mavic 3 Pro, son nouveau drone phare doté d'un système à trois caméras.Pas plus tard qu’hier, nous évoquions l’arrivée d’un drone d’un nouveau genre chez DJI. … [+4085 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Thomas Estimbre",
      title: "Humane : la start-up secrète dévoile le smartphone de demain",
      description:
        "Nouvelle sensation de la Silicon Valley, la start-up Humaine présente un assistant vocal particulièrement intriguant. Il ambitionne d'envoyer nos smartphones à la retraite, mais tiendra-t-il vraiment toutes ses promesses ?\nHumane : la start-up secrète dévoile…",
      url: "https://www.journaldugeek.com/2023/04/25/humane-la-start-up-secrete-devoile-le-smartphone-de-demain/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2023/04/humane-assistant-ia.jpg",
      publishedAt: "2023-04-25T14:30:11Z",
      content:
        "Nouvelle sensation de la Silicon Valley, la start-up Humaine présente un assistant vocal particulièrement intriguant. Il ambitionne d'envoyer nos smartphones à la retraite, mais tiendra-t-il vraiment… [+4828 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Fran Bouzas",
      title:
        "Spotify era la reina de las recomendaciones, hasta ahora: su pesadilla se llama Petey y mezcla ChatGPT con Apple Music",
      description:
        "Que en este último año Apple Music ha superado a Spotify en prácticamente todas las categorías en las que compiten es innegable. La calidad de audio es mejor, incluye Dolby Atmos, y hasta paga sustancialmente mejor por reproducción a los artistas.\n<!-- BREAK …",
      url: "https://www.applesfera.com/aplicaciones-ios-1/spotify-era-reina-recomendaciones-ahora-su-pesadilla-se-llama-se-llama-petey-mezcla-chatgpt-apple-music",
      urlToImage: "https://i.blogs.es/488063/diseno-sin-titulo-24/840_560.jpeg",
      publishedAt: "2023-04-25T09:11:58Z",
      content:
        "Que en este último año Apple Music ha superado a Spotify en prácticamente todas las categorías en las que compiten es innegable. La calidad de audio es mejor, incluye Dolby Atmos, y hasta paga sustan… [+1712 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "El drama legal de Epic contra Apple marca un nuevo (y decisivo) capítulo",
      description:
        "La guerra legal entre Epic Games y Apple continúa debido a las insistencias de los propietarios de Fortnite, que buscan rascar alguna victoria apelando a la sentencia que el tribunal estadounidense dictó mayoritariamente a favor de los de Cupertino en 2021. E…",
      url: "https://www.applesfera.com/app-store-1/drama-legal-epic-apple-marca-nuevo-decisivo-capitulo",
      urlToImage: "https://i.blogs.es/c18452/fortnite-iphone/840_560.jpeg",
      publishedAt: "2023-04-25T08:02:41Z",
      content:
        "La guerra legal entre Epic Games y Apple continúa debido a las insistencias de los propietarios de Fortnite, que buscan rascar alguna victoria apelando a la sentencia que el tribunal estadounidense d… [+2905 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        'Phone House desploma el iPhone 13 de 512 GB y se queda a mejor precio que el iPhone 14 "básico"',
      description:
        "A pesar de que su sucesor lleva ya unos cuantos meses disponible en el mercado, el iPhone 13 no tiene (casi) nada que envidiarle al iPhone 14, y es por eso que esta oferta de la versión de 512 GB a 899 euros en Phone House es tan golosa.\n<!-- BREAK 1 --><!-- …",
      url: "https://www.applesfera.com/seleccion/phone-house-desploma-iphone-13-512-gb-se-queda-a-mejor-precio-que-iphone-14-basico",
      urlToImage: "https://i.blogs.es/c37198/iphone-13-512-gb/840_560.jpeg",
      publishedAt: "2023-04-25T05:48:26Z",
      content:
        "A pesar de que su sucesor lleva ya unos cuantos meses disponible en el mercado, el iPhone 13 no tiene (casi) nada que envidiarle al iPhone 14, y es por eso que esta oferta de la versión de 512 GB a 8… [+2146 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Fran Bouzas",
      title:
        "Atrapados en el fondo de un gran cañón, tres estudiantes salvan sus vidas usando esta función del iPhone 14",
      description:
        "Te voy a poner en situación. Eres un estudiante universitario americano a punto de graduarse. Tu vida es normal. Te van bien las notas, te gusta salir de fiesta, y tienes un grupo de amigos con los que haces planes todos los fines de semana. Habéis decidido q…",
      url: "https://www.applesfera.com/curiosidades/atrapados-fondo-gran-canon-tres-estudiantes-salvan-sus-vidas-usando-esta-funcion-iphone-14",
      urlToImage: "https://i.blogs.es/a7bb5c/diseno-sin-titulo-25/840_560.jpeg",
      publishedAt: "2023-04-25T11:05:23Z",
      content:
        "Te voy a poner en situación. Eres un estudiante universitario americano a punto de graduarse. Tu vida es normal. Te van bien las notas, te gusta salir de fiesta, y tienes un grupo de amigos con los q… [+2072 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "Última oportunidad para aprovechar SkyShowtime al 50% de por vida: la gran vencedora en la guerra del streaming ante la subida de Max",
      description:
        "Si algo sube demasiado de precio, aprovecha y haz competencia con una alternativa barata. Es lo que debieron pensar en SkyShowtime ante lo ocurrido con Netflix, que se ha ganado la enemistad de más de uno subiendo precios e imponiendo nuevos límites a la hora…",
      url: "https://www.applesfera.com/aplicaciones-ios-1/ultima-oportunidad-para-aprovechar-skyshowtime-al-50-vida-gran-vencedora-guerra-streaming-subida-max",
      urlToImage: "https://i.blogs.es/76fd52/skyshowtime-iphone/840_560.jpeg",
      publishedAt: "2023-04-25T15:06:41Z",
      content:
        "Si algo sube demasiado de precio, aprovecha y haz competencia con una alternativa barata. Es lo que debieron pensar en SkyShowtime ante lo ocurrido con Netflix, que se ha ganado la enemistad de más d… [+2043 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Pedro Aznar",
      title:
        "Cómo funciona la detección de alarmas de humo de los HomePod y qué tienes que hacer si se activan",
      description:
        "La nueva actualización de los HomePods ha activado una curiosa funcionalidad que se anunció con el lanzamiento de los HomePod 2: la detección de forma activa de alarmas de humo o de monóxido de carbono, allá donde estén instalados.\n<!-- BREAK 1 -->\nLo que ha …",
      url: "https://www.applesfera.com/homepod/como-funciona-deteccion-alarmas-humo-homepod-que-tienes-que-hacer-se-activan",
      urlToImage:
        "https://i.blogs.es/a9b02c/deteccion-humo-homepods-aps-005/840_560.jpeg",
      publishedAt: "2023-04-25T10:05:54Z",
      content:
        "La nueva actualización de los HomePods ha activado una curiosa funcionalidad que se anunció con el lanzamiento de los HomePod 2: la detección de forma activa de alarmas de humo o de monóxido de carbo… [+3616 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Denise Lim",
      title: "9 Fixes When Your iPhone's Screen Has a Yellow Tint",
      description:
        "If you notice a yellow tint on your iPhone's display, here's everything you can do to resolve the issue before you send it to Apple.",
      url: "https://www.makeuseof.com/iphone-screen-yellow-tint-fixes/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/11/Dynamic-Island-on-the-iPhone-14-Pro.jpg",
      publishedAt: "2023-04-25T10:45:16Z",
      content:
        "The iPhone is not a cheap device, so if you notice that your iPhone's screen seems to exhibit a yellow tint lately, you're probably feeling concerned and annoyed because displaying colors accurately … [+6315 chars]",
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Jude Karabus",
      title: "Tech giants could pay 10% of turnover under draft UK law",
      description:
        "Competition? We've heard of it\nNearly two years after its creation, the UK's Digital Markets Unit (DMU) – meant to bring Big Tech to heel in much the same way as the EU's DMA – might finally get some teeth, with a draft law allowing it to fine anti-competitiv…",
      url: "https://www.theregister.com/2023/04/25/cma_dmcc_bill/",
      urlToImage: "https://regmedia.co.uk/2020/09/25/shutterstock_1542932.jpg",
      publishedAt: "2023-04-25T15:29:14Z",
      content:
        "Nearly two years after its creation, the UK's Digital Markets Unit (DMU)  meant to bring Big Tech to heel in much the same way as the EU's DMA might finally get some teeth, with a draft law allowing … [+3807 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Mike Viray",
      title: "An Age-Old Android Feature is Expected to Come to iOS Soon",
      description:
        "It looks like Apple will soon have to grant users sideloading privileges, at least in the EU.",
      url: "https://phandroid.com/2023/04/25/an-age-old-android-feature-is-expected-to-come-to-ios-soon/",
      urlToImage: null,
      publishedAt: "2023-04-25T11:28:09Z",
      content:
        "One of the biggest joys of owning an Android phone is that users are able to download apps on their phones without the need for an app store – known as “sideloading,” this method lets users manually … [+1252 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Mike Viray",
      title: "This Deal Brings the Galaxy Watch 5’s Price down to $250!",
      description:
        "The Samsung Galaxy Watch 5 comes with several features designed to let users monitor their health, exercise, and smartphone activity as well.",
      url: "https://phandroid.com/2023/04/25/this-deal-brings-the-galaxy-watch-5s-price-down-to-250/",
      urlToImage: null,
      publishedAt: "2023-04-25T11:27:20Z",
      content:
        "Samsungs Galaxy Watch wearables are undoubtedly among the best Wear OS-powered smartwatches out there, thanks to a combination of premium hardware and a rich set of features. The Galaxy Watch 5 serie… [+830 chars]",
    },
    {
      source: {
        id: null,
        name: "DIYphotography",
      },
      author: "Udi Tirosh",
      title: "DJI moves to a Triple-Camera Gimbal with the Mavic 3 Pro",
      description:
        "DJI just does not stop. After releasing the Inspire 3 at NAB, they still have enough wind in their pipes to release another drone just a week after – the Mavic 3 Pro (buy here). It was quite expected that the drone giant would release an iteration of the Mavi…",
      url: "https://www.diyphotography.net/dji-moves-to-a-triple-camera-gimbal-with-the-mavic-3-pro/",
      urlToImage:
        "https://www.diyphotography.net/wp-content/uploads/2023/04/dji-mavic-pro-3-title.jpg",
      publishedAt: "2023-04-25T13:58:42Z",
      content:
        "DJI just does not stop. After releasing the Inspire 3 at NAB, they still have enough wind in their pipes to release another drone just a week after the Mavic 3 Pro (buy here).\r\nIt was quite expected … [+12838 chars]",
    },
    {
      source: {
        id: null,
        name: "DIYphotography",
      },
      author: "Dunja Djudjic",
      title: "A recent solar storm triggers aurora all over the world",
      description:
        "A strong solar storm hit the Earth on April 23, 2023, causing disturbances in our planet’s electromagnetic field. Consequently, people from many different parts of the world witnessed aurora. In the U.S., the Northern lights were visible as far as Illinois, b…",
      url: "https://www.diyphotography.net/solar-storm-aurora-all-over-the-world/",
      urlToImage:
        "https://www.diyphotography.net/wp-content/uploads/2023/04/solar-storm-northern-lights-scaled.jpg",
      publishedAt: "2023-04-25T14:05:53Z",
      content:
        "A strong solar storm hit the Earth on April 23, 2023, causing disturbances in our planets electromagnetic field. Consequently, people from many different parts of the world witnessed aurora. In the U… [+2473 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Presse-citron",
      title: "Dans un secteur, Apple écrase Samsung sans le moindre doute",
      description:
        "Les smartphones neufs voient les deux marques reines s'affronter au coude à coude. Mais ce n'est pas le cas partout.",
      url: "https://www.presse-citron.net/secteur-apple-ecrase-samsung-pas-doute/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2023/04/iphone-2.jpg",
      publishedAt: "2023-04-25T07:00:10Z",
      content:
        "<ul><li>Apple serait le premier vendeur de smartphones reconditionnés, selon une étude</li><li>Oppo et Vivo se partagent la dernière marche du podium</li><li>Bien que meilleurs pour l’environnement, … [+2475 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "L’iPhone 14 sauve 3 étudiants bloqués dans un canyon, grâce à cette fonctionnalité",
      description:
        "Des étudiants bloqués dans un canyon utilisent la communication par satellite de l’iPhone 14 pour contacter les secours.",
      url: "https://www.presse-citron.net/?p=550352",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/10/test-iphone-14-plus-capteurs-photo.jpg",
      publishedAt: "2023-04-25T13:45:50Z",
      content:
        "<ul><li>3 étudiants américains ont été secourus grâce à liPhone 14, alors quils étaient coincés dans un canyon</li><li>Sans réseau pour appeler les secours, ils ont utilisé la communication par satel… [+2853 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Simon Krebs",
      title: "Anzeige: Apple iPad Pro um über 450 Euro reduziert bei Amazon",
      description:
        "An ein günstiges iPad Pro kommt man aktuell besonders gut bei Amazon. Je nach Modell und Konfiguration sind über 450 Euro Rabatt möglich. (iPad Pro, Apple)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fanzeige-apple-ipad-pro-um-ueber-450-euro-reduziert-bei-amazon-2304-173692.html&referer=https%3A%2F%2Ft.co%2Fe3a2981073",
      urlToImage: null,
      publishedAt: "2023-04-25T11:30:03Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Dpreview.com",
      },
      author: "Kara Murphy",
      title:
        "DJI announces the Mavic 3 Pro, the first-ever drone with three cameras",
      description:
        "<table>\n\n<tr>\n<td></td>\n</tr>\n\r\n\n</table>\nDJI has announced the latest models in its Mavic 3 series. The Pro and Pro Cine are the first drones in the world to feature a three-camera lens array.\nFor its main camera, DJI has equipped its latest releases with th…",
      url: "https://www.dpreview.com/news/2241803364/dji-announces-the-mavic-3-pro-the-first-ever-drone-with-three-cameras",
      urlToImage:
        "https://1.img-dpreview.com/files/p/E~TS940x788~articles/2241803364/Mavic_3_Pro_lifestyle_12.jpeg",
      publishedAt: "2023-04-25T13:00:00Z",
      content:
        "DJI has announced the latest models in its Mavic 3 series. The Pro and Pro Cine are the first drones in the world to feature a three-camera lens array.\r\nFor its main camera, DJI has equipped its late… [+3611 chars]",
    },
    {
      source: {
        id: null,
        name: "GameSpot",
      },
      author: "Eric Frederiksen",
      title:
        'Apple Declares "Resounding Victory" Over Epic Games Following Appeals Court Ruling',
      description:
        "After the latest portion of a long legal battle, Apple has come out on top over Fortnite developer Epic Games, with an appeals court siding with Apple on nine out of 10 claims.\"Today's decision reaffirms Apple's resounding victory in this case,\" an Apple spok…",
      url: "https://www.gamespot.com/articles/apple-declares-resounding-victory-over-epic-games-following-appeals-court-ruling/1100-6513515/",
      urlToImage:
        "https://www.gamespot.com/a/uploads/screen_kubrick/1603/16030002/4129218-fortnite.jpg",
      publishedAt: "2023-04-25T13:39:00Z",
      content:
        "After the latest portion of a long legal battle, Apple has come out on top over Fortnite developer Epic Games, with an appeals court siding with Apple on nine out of 10 claims.\r\n\"Today's decision rea… [+2469 chars]",
    },
    {
      source: {
        id: null,
        name: "GameSpot",
      },
      author: "Eddie Makuch",
      title:
        "Harrison Ford Will Never Play Indiana Jones Again, Is Not Involved In Reported TV Series",
      description:
        "Harrison Ford returns to play Indiana Jones once again for Indiana Jones and the Dial of Destiny, but don't expect the Oscar-nominated actor to ever wield the whip again.Speaking to Total Film, Ford made his intentions pretty clear: \"This is the final film in…",
      url: "https://www.gamespot.com/articles/harrison-ford-will-never-play-indiana-jones-again-is-not-involved-in-reported-tv-series/1100-6513534/",
      urlToImage:
        "https://www.gamespot.com/a/uploads/screen_kubrick/1179/11799911/4129522-screenshot2023-04-25at11.16.57am.png",
      publishedAt: "2023-04-25T14:53:00Z",
      content:
        "Harrison Ford returns to play Indiana Jones once again for Indiana Jones and the Dial of Destiny, but don't expect the Oscar-nominated actor to ever wield the whip again.\r\nSpeaking to Total Film, For… [+1467 chars]",
    },
    {
      source: {
        id: null,
        name: "Ritholtz.com",
      },
      author: "Barry Ritholtz",
      title: "10 Tuesday AM Reads",
      description:
        "My Two-for-Tuesday morning train WFH reads: • What Happens After a Bad Year in the Stock Market? The year is still young of course but there is an obvious divergence in the price action between 2022 and 2023. This is a good reminder about what generally tends…",
      url: "https://ritholtz.com/2023/04/10-tuesday-am-reads-424/",
      urlToImage:
        "https://ritholtz.com/wp-content/uploads/2023/05/bedbath.jpeg",
      publishedAt: "2023-04-25T10:30:05Z",
      content:
        "What Happens After a Bad Year in the Stock Market? The year is still young of course but there is an obvious divergence in the price action between 2022 and 2023. This is a good reminder about what g… [+4157 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (Hypebeast)",
      title: "CASETiFY Drops Third NBA Capsule Just In Time for Playoffs",
      description:
        "With the NBA playoffs well on its way, CASETiFY is releasing its third collections with the league. Fans will be able to rep their favorite team with the new phone accessories gear. The third installment of the popular NBA x CASETiFY collection takes inspirat…",
      url: "https://hypebeast.com/2023/4/casetify-third-nba-accessories-capsule-release-info",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F04%2Fcasetify-third-nba-accessories-capsule-release-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2023-04-25T05:08:31Z",
      content:
        "With the NBA playoffs well on its way, CASETiFY is releasing its third collections with the league. Fans will be able to rep their favorite team with the new phone accessories gear. \r\nThe third insta… [+1035 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Saloni Gajjar, Mary Kate Carr, Tim Lowery, and Sam Barsanti",
      title:
        "May TV preview: Bupkis, a Bridgerton spin-off, and 24 other must-watch shows",
      description:
        "May 2023 might go down in television history because it marks the end of current TV favorites like Succession, Barry, and Ted Lasso. But as these doors close, several more open. HBO bounces back with the political satire White House Plumbers and thankfully re…",
      url: "https://www.avclub.com/may-2023-tv-preview-bupkis-queen-charlotte-bridgerton-1850352718",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c5caade7c40834a9b4adcb238fe7bd58.jpg",
      publishedAt: "2023-04-25T14:00:00Z",
      content:
        "Pete Davidson is coming for us all. The comedian and actor, who left SNL last year, rolls out a new project with Lorne Michaels. Davidson leads Bupkis, a comedy loosely based on his life thats appare… [+443 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Joe Wituschek",
      title:
        "Apple touts 800 vehicles feature CarPlay as GM says it is abandoning support",
      description:
        "Apple made a quiet update to its website to say just how dominant CarPlay is. Maybe Tim Cook wants GM to reconsider. At the end …\nThe post Apple touts 800 vehicles feature CarPlay as GM says it is abandoning support appeared first on BGR.",
      url: "https://bgr.com/tech/apple-touts-800-vehicles-feature-carplay-as-gm-says-it-is-abandoning-support/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2021/09/apple-carplay.jpg?quality=82&strip=all",
      publishedAt: "2023-04-25T00:51:36Z",
      content:
        "If you buy through links on BGR, we may receive an affiliate commission. Learn more.Apple made a quiet update to its website to say just how dominant CarPlay is. Maybe Tim Cook wants GM to reconsider… [+1835 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "José Adorno",
      title: "Apple AirTag popularity helps item tracker sales soar in Q1 2023",
      description:
        "As the COVID-19 pandemic eased, more people started traveling in the first months of 2023. Research by Circana shows that sale revenue for item trackers …\nThe post Apple AirTag popularity helps item tracker sales soar in Q1 2023 appeared first on BGR.",
      url: "https://bgr.com/tech/apple-airtag-popularity-helps-item-tracker-sales-soar-in-q1-2023/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2021/04/apple-spring-loaded-event-22.jpg?quality=82&strip=all",
      publishedAt: "2023-04-25T11:55:03Z",
      content:
        "If you buy through links on BGR, we may receive an affiliate commission. Learn more.As the COVID-19 pandemic eased, more people started traveling in the first months of 2023. Research by Circana show… [+2026 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Maren Estrada",
      title:
        "Today’s deals: $199 AirPods Pro, $150 off M2 MacBook Air, $20 Fire Stick, Roomba deals, more",
      description:
        "There are so many great tech deals available on Tuesday, it’s tough to tell where we should start. AirPods Pro are down to $199 if …\nThe post Today’s deals: $199 AirPods Pro, $150 off M2 MacBook Air, $20 Fire Stick, Roomba deals, more appeared first on BGR.",
      url: "https://bgr.com/deals/todays-deals-199-airpods-pro-150-off-m2-macbook-air-20-fire-stick-roomba-deals-more/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2023/04/BGR-Deals-Of-The-Day-2023-Tuesday.jpg?quality=82&strip=all",
      publishedAt: "2023-04-25T13:17:00Z",
      content:
        "If you buy through links on BGR, we may receive an affiliate commission. Learn more.There are so many great tech deals available on Tuesday, it’s tough to tell where we should start. AirPods Pro are … [+842 chars]",
    },
    {
      source: {
        id: null,
        name: "Internet",
      },
      author: "info@thehackernews.com (The Hacker News)",
      title:
        "Lazarus Subgroup Targeting Apple Devices with New RustBucket macOS Malware",
      description:
        'A financially-motivated North Korean threat actor is suspected to be behind a new Apple macOS malware strain called RustBucket.\n"[RustBucket] communicates with command and control (C2) servers to download and execute various payloads," Jamf Threat Labs resear…',
      url: "https://thehackernews.com/2023/04/lazarus-subgroup-targeting-apple.html",
      urlToImage:
        "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEgpl9JhpSFX-658GFQZLKHpaIujC7ybpnu4v4fS2Na20Y6-ERCHjpn6Dv3YArGBD4QPRILYl7EDWKk23z-EEA3j7N-WlIQ75sQjQQGrJFOki4y5qQKw6qHPHyYUigqGvxcaTrI2B20BZXH1gycovn8gW22biMattn8sTa9h3VxW7mhanCu5r-hAjrSw/s728-e3650/macos.png",
      publishedAt: "2023-04-25T11:27:00Z",
      content:
        'A financially-motivated North Korean threat actor is suspected to be behind a new Apple macOS malware strain called RustBucket.\r\n"[RustBucket] communicates with command and control (C2) servers to do… [+5946 chars]',
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Dennis Kremer, Inken Schönauer",
      title: "Richtig vererben: So geht es",
      description:
        "Jedes Jahr werden in Deutschland rund 400 Milliarden Euro vererbt. Doch wie macht man eigentlich ein Testament? Und was müssen Erben wissen? Der F.A.Z. Finanzen Podcast hat die Antworten.",
      url: "https://www.faz.net/podcasts/f-a-z-finanzen-immobilien/richtig-vererben-so-geht-es-18847082.html",
      urlToImage:
        "https://media0.faz.net/ppmedia/aktuell/1529608155/1.8847114/facebook_teaser/1bf6aa6a-de6d-11ea-972f.jpg",
      publishedAt: "2023-04-25T14:11:48Z",
      content:
        "Sie können den Podcast ganz einfach bei Apple Podcasts,Spotify oder Deezer abonnieren und verpassen so keine neue Folge. Natürlich sind wir auch in anderen Podcast-Apps verfügbar, suchen Sie dort ein… [+418 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Stephen Warwick",
      title:
        "Epic Games just lost its massive iPhone lawsuit (again) — here's what it means for you",
      description:
        "Apple has won another App Store lawsuit victory over Epic Games after an appeals court ruled in its favor.",
      url: "https://www.imore.com/apple/epic-games-just-lost-its-massive-iphone-lawsuit-again-heres-what-it-means-for-you",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/6gG4RQkcp3vZyWV9z5NC9X-1200-80.jpg",
      publishedAt: "2023-04-25T09:18:25Z",
      content:
        "Apple has once again seen its App Store business model on iPhone affirmed by the courts in its ongoing legal battle with Fortnite developer Epic Games. \r\nIn a ruling this week the US Ninth Circuit Co… [+2853 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Tammy Rogers",
      title: "CarPlay now available in over 800 vehicle models in the US",
      description:
        "Until GM pulls CarPlay support from its vehicles, Apple CarPlay is currently available in over 800 models sold in the US.",
      url: "https://www.imore.com/iphone/carplay-now-available-in-over-800-vehicle-models-in-the-us",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/Xago2nQXKeHVYw8YENSKxg-1200-80.jpg",
      publishedAt: "2023-04-25T10:11:35Z",
      content:
        "CarPlay is growing, and Apple has the list to prove it. On the Apple CarPlay website (opens in new tab), Apple's list that once read 600 car models now reads 800, with loads of new additions. There's… [+1782 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "gerald.lynch@futurenet.com (Gerald Lynch)",
      title: "Journey ALTI Wireless Charging Desk Mat review: power and style",
      description:
        "With space to charge two wireless MagSafe devices, the Journey ALTI Wireless Charging Desk Mat will easily find a home on the style-conscious Apple user’s desk.",
      url: "https://www.imore.com/accessories/journey-alti-wireless-charging-desk-mat-review",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/EsFSzQzxyBwbmRFGEqqzyd-1200-80.jpg",
      publishedAt: "2023-04-25T14:05:25Z",
      content:
        "Space-saving devices are top of my most-wanted list when putting my desk accessories together. The more I can avoid adding extra cables, stands and chargers to my small work-from-home space, the bett… [+5471 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "oliver@monkeymanmedia.com (Oliver Haslam)",
      title:
        "Apple Music's competition grows as Spotify boasts half a billion active users",
      description:
        "Spotify has announced some impressive numbers as part of its latest quarterly results.",
      url: "https://www.imore.com/apps/music-apps/apple-musics-competition-grows-as-spotify-boasts-half-a-billion-active-users",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/SbY8EYJ56wQzgzaphS73RT-1200-80.jpg",
      publishedAt: "2023-04-25T13:41:45Z",
      content:
        "The world of music streaming is a competitive one and Apple Music has plenty to shout about. But if there's one streamer that it seems set to perpetually play catch up to, it's Spotify.\r\nThe Swedish … [+1866 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Tammy Rogers",
      title:
        "Wombat Coleus mechanical keyboard review: Good keyboard, shame about the power button",
      description:
        "The Coleus provides a solid typing feel but falls down in the looks and portable accessories department. That, and turning it off and on is weird.",
      url: "https://www.imore.com/accessories/wombat-coleus-mechanical-keyboard-review-good-keyboard-shame-about-the-power-button",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/GptJULKEhYuJEBydDxMFve-1200-80.jpg",
      publishedAt: "2023-04-25T13:03:26Z",
      content:
        "The compact, low-profile mechanical keyboard market seems, at the moment, to be growing like a clickety-clacking weed, with options from loads of different manufacturers. It’s no surprise they’re bec… [+9757 chars]",
    },
    {
      source: {
        id: null,
        name: "PetaPixel",
      },
      author: "Jeremy Gray",
      title: "AI-Powered Meta Cataloging Mac App Peakto Adds DxO Compatibility",
      description:
        "Peakto, an artificial intelligence-powered (AI) app for Mac that provides photographers a centralized view of all their images across numerous popular photo editing apps, has announced new compatibility with DxO PhotoLab and DxO PureRAW.\n[Read More]",
      url: "https://petapixel.com/2023/04/25/ai-powered-meta-cataloging-mac-app-peakto-adds-dxo-compatibility/",
      urlToImage:
        "https://petapixel.com/assets/uploads/2023/04/peakto-dxo-featured.jpg",
      publishedAt: "2023-04-25T13:48:44Z",
      content:
        "Peakto, an artificial intelligence-powered (AI) app for Mac that provides photographers a centralized view of all their images across numerous popular photo editing apps, has announced new compatibil… [+2859 chars]",
    },
    {
      source: {
        id: null,
        name: "/FILM",
      },
      author: "Jacob Hall",
      title:
        "Napoleon Footage Reaction: Ridley Scott And Joaquin Phoenix Go Epic [CinemaCon 2023]",
      description:
        'Over 20 years ago, director Ridley Scott and star Joaquin Phoenix received Oscar nominations for their work on the historical epic "Gladiator." Now, the veteran filmmaker and increasingly fascinating actor have teamed up again for another war-driven costume d…',
      url: "https://www.slashfilm.com/1267118/napoleon-footage-reaction-cinemacon-2023/",
      urlToImage:
        "https://www.slashfilm.com/img/gallery/napoleon-footage-reaction-ridley-scott-and-joaquin-phoenix-go-epic-cinemacon-2023/l-intro-1682376713.jpg",
      publishedAt: "2023-04-25T03:37:24Z",
      content:
        "We get a pretty nice hero shot of Napoleon witnessing the carnage. He drops his hand, signaling his people to fire the hidden cannons. The ground explodes as it's revealed that the battlefield is act… [+1179 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
        articles: this.articles
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="my-3">DailyDose - Top Headlines</h1>
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title={"title"}
                description={"description"}
                imageUrl={
                  "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg"
                }
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title={"title"}
                description={"description"}
                imageUrl={
                  "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg"
                }
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title={"title"}
                description={"description"}
                imageUrl={
                  "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg"
                }
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title={"title"}
                description={"description"}
                imageUrl={
                  "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg"
                }
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title={"title"}
                description={"description"}
                imageUrl={
                  "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg"
                }
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title={"title"}
                description={"description"}
                imageUrl={
                  "https://s.yimg.com/uu/api/res/1.2/XOMB72LjuTa5RLyzZ4JA5Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d865d0f0-e355-11ed-b5ff-ec2dc60bb88a.cf.jpg"
                }
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
