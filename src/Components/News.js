import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Watch: Unseen footage of Dhoni losing his cool, screaming at teammate goes viral - Hindustan Times",
      description:
        "On Tuesday, one such video went viral all over social media where Dhoni was seen losing his cool. | Cricket",
      url: "https://www.hindustantimes.com/cricket/watch-unseen-footage-of-ms-dhoni-losing-his-cool-screaming-at-his-csk-teammate-during-ipl-2023-match-breaks-internet-101682419830884.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/04/25/1600x900/dhoni_angry_cool_1682421186973_1682421197757.jpg",
      publishedAt: "2023-04-25T11:21:26Z",
      content:
        "MS Dhoni is often referred to as captain cool by his beloved fans, his colleagues and veteran cricketers. The former India captain's ability to stay calm and composed even in the worst of situations,… [+1656 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "\"Need To Improve...\": Ex-Pakistan Captain Points Out 4 'Faults' In Arjun Tendulkar's Bowling - NDTV Sports",
      description:
        "Former Pakistan player Rashid Latif has picked out four 'faults' in the bowling of Arjun Tendulkar, the son of legendary cricketer Sachin Tendulkar.",
      url: "https://sports.ndtv.com/ipl-2023/need-to-improve-ex-pakistan-captain-points-out-4-faults-in-arjun-tendulkars-bowling-3974813",
      urlToImage:
        "https://c.ndtvimg.com/2023-04/cqq89o3g_arjun-tendulkar-bcci-ipl_625x300_23_April_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-04-25T09:48:02Z",
      content:
        "Former Pakistan captain Rashid Latif has found four 'faults' in the bowling of Arjun Tendulkar, the son of legendary cricketer Sachin Tendulkar. It is worth noting that Arjun's game has been in focus… [+1751 chars]",
    },
    {
      source: {
        id: null,
        name: "Ak4tsay1.com",
      },
      author: "Adesh Kothari",
      title:
        "Exclusive: The Most Unlucky Players 11 to Miss IPL 2023 Season - AK4TSay1 Cricalytics",
      description:
        "Rishabh Pant, the most unfortunate as we look at the unlucky players 11 of the tournament for IPL 2023.  The IPL 2023 is currently nicely poised at the",
      url: "https://www.ak4tsay1.com/exclusive-the-most-unlucky-players-11-to-miss-ipl-2023-season/",
      urlToImage:
        "https://www.ak4tsay1.com/wp-content/uploads/2023/04/ipl-2023-most-unlucky-players-11.jpg",
      publishedAt: "2023-04-25T09:12:20Z",
      content:
        "Rishabh Pant, the most unfortunate as we look at the unlucky players 11 of the tournament for IPL 2023. \r\nThe IPL 2023 is currently nicely poised at the mid-stage with almost all teams having played … [+4930 chars]",
    },
    {
      source: {
        id: null,
        name: "Rediff.com",
      },
      author: "PTI",
      title: "Do-or-die for KKR as they take on RCB - Rediff.com",
      description: "Struggling KKR seek change of fortunes against RCB",
      url: "https://www.rediff.com/cricket/report/ipl-2023-do-or-die-for-kkr-as-they-take-on-rcb/20230425.htm",
      urlToImage: "https://im.rediff.com/cricket/2023/apr/22kkr1.jpg",
      publishedAt: "2023-04-25T09:11:50Z",
      content:
        "Struggling KKR seek change of fortunes against RCB\r\nIMAGE: KKR, who have lost their last three matches, have slipped to eighth place in the 10-team standings. Photograph: BCCI \r\nKolkata Knight Riders… [+4185 chars]",
    },
    {
      source: {
        id: null,
        name: "Sportskeeda",
      },
      author: "Sripad",
      title:
        "“A true gentleman who knows how to woo a woman” – When Italian model opened up on dinner date with Cristiano Ronaldo in Ibiza - Sportskeeda",
      description:
        "Cristiano Ronaldo is now with his girlfriend Georgina Rodriguez, but before that, he was spotted with several women following his breakup with supermodel Irina Shayk.",
      url: "https://www.sportskeeda.com/football/news-a-true-gentleman-knows-woo-woman-when-italian-model-opened-dinner-date-cristiano-ronaldo-ibiza",
      urlToImage:
        "https://staticc.sportskeeda.com/editor/2023/04/75b54-16824018489255-1920.jpg",
      publishedAt: "2023-04-25T09:08:00Z",
      content:
        "Cristiano Ronaldo is now with his girlfriend Georgina Rodriguez, but before that, he was spotted with several women following his breakup with supermodel Irina Shayk. Cristina Buccino was one of the … [+1816 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Aritra Mukherjee",
      title:
        "Social media is wrong! Rahane's selection for WTC final is not because of IPL - Hindustan Times",
      description:
        "No, Ajinkya Rahane's comeback to the Test side after 15 months for WTC final was not a surprise and neither was it because of his exploits for CSK in IPL 2023. | Cricket",
      url: "https://www.hindustantimes.com/cricket/social-media-is-wrong-ajinkya-rahane-s-selection-for-wtc-final-is-not-because-of-ipl-2023-exploits-for-csk-here-s-why-101682412447645.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/04/25/1600x900/PTI04-23-2023-000392B-0_1682412772341_1682412821928.jpg",
      publishedAt: "2023-04-25T08:56:05Z",
      content:
        "India's 15-member squad, announced on Tuesday, for the WTC final against Australia was as predictable as it could have been. No, Ajinkya Rahane's comeback to the Test side after 15 months was not a s… [+4750 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "Yuzvendra Chahal Picks His Favourite IPL Captain. It's Not Virat Kohli Or Rohit Sharma - NDTV Sports",
      description:
        "Yuzvendra Chahal made his IPL debut in 2013, playing for Mumbai Indians under the captaincy of Rohit before he became a part of Royal Challengers Bangalore's playing XI the next season under the leadership of Virat Kohli.",
      url: "https://sports.ndtv.com/ipl-2023/yuzvendra-chahal-picks-his-favourite-ipl-captain-its-not-virat-kohli-or-rohit-sharma-3972729",
      urlToImage:
        "https://c.ndtvimg.com/2023-04/iq5kkhn8_yuzvendra-chahal-bcci_625x300_25_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-04-25T08:32:22Z",
      content:
        "India star and Rajasthan Royals leg spinner Yuzvendra Chahal has picked Sanju Samson as his favourite IPL captain. He added that the RR skipper has given him the liberty to bowl his quota of four ove… [+1313 chars]",
    },
    {
      source: {
        id: null,
        name: "Sportskeeda",
      },
      author: "Aditya Hosangadi",
      title:
        "Manchester City vs Arsenal Prediction and Betting Tips | 26th April 2023 - Sportskeeda",
      description:
        "The Premier League features its most decisive game of the season this week as Arsenal lock horns with Pep Guardiola's Manchester City side in a season-defining clash at the Etihad Stadium on Wednesday.",
      url: "https://www.sportskeeda.com/football/manchester-city-vs-arsenal-prediction-betting-tips-26th-april-2023",
      urlToImage:
        "https://staticc.sportskeeda.com/editor/2023/04/d3bd7-16823635842819-1920.jpg",
      publishedAt: "2023-04-25T08:06:49Z",
      content: null,
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Steven Lynch",
      title:
        "Does Dinesh Karthik hold the record for most ducks in the IPL? - ESPNcricinfo",
      description:
        "Also: how many players have scored a hundred and taken a hat-trick on the same day in first-class cricket?",
      url: "https://www.espncricinfo.com/story/does-dinesh-karthik-hold-the-record-for-most-ducks-in-the-ipl-ask-steven-1371034",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/339000/339041.6.jpg",
      publishedAt: "2023-04-25T08:04:28Z",
      content:
        "Tom Price was the 17th player to score a century and take a hat-trick in the same first-class game, but the first to do both on the same day  •  Getty Images",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Prachi Arya",
      title:
        "Virat Kohli gets angry at fan who tries to break security for a selfie with Anushka Sharma in Bengaluru. Watch - India Today",
      description:
        "Virat Kohli and Anushka Sharma recently visited one of the popular eateries in Bengaluru. The two who enjoyed food at CTR (Central Tiffin Room) were mobbed by fans after their lunch date.",
      url: "https://www.indiatoday.in/movies/celebrities/story/virat-kohli-gets-angry-at-fan-who-tries-to-break-security-for-a-selfie-with-anushka-sharma-in-bengaluru-watch-2364353-2023-04-25",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/virat_2-sixteen_nine.jpg?VersionId=MAyknclQfGYdGDPRi6kaQoqzBzxxOW2e",
      publishedAt: "2023-04-25T07:39:06Z",
      content:
        "By Prachi Arya: \r\nAnushka Sharma and Virat Kohli recently had a great time feasting on some lip-smacking food at one of the popular eateries in Bengaluru. The couple enjoyed their time trying out the… [+1479 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "Watch: David Warner Touches Bhuvneshwar Kumar's Feet On Hyderabad Return, Video Goes Viral - NDTV Sports",
      description:
        "David Warner touched Bhuvneshwar Kumar's feet after entering the stadium for the match between Delhi Capitals and Sunrisers Hyderabad in IPL 2023.",
      url: "https://sports.ndtv.com/ipl-2023/david-warner-touches-bhuvneshwar-kumars-feet-on-hyderabad-return-video-goes-viral-watch-3977074",
      urlToImage:
        "https://c.ndtvimg.com/2023-04/gc2tt0g_david-warner-and-bhuvneshwar-kumar_650x300_25_April_23.jpg",
      publishedAt: "2023-04-25T07:31:47Z",
      content:
        "Returning to the home stadium of the team with which he won the Indian Premier League (IPL) title, David Warner was in a mesmerising mood. Upon spotting his old Sunrisers Hyderabad teammate Bhuvneshw… [+2043 chars]",
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: null,
      title:
        "Fresh Tropical vs KINGS XI Match 6 2023 Full Scorecard & Updates - CricTracker",
      description:
        "FT vs KIN-XI Match 6 2023 Full Scorecard: Get the live & detailed FT vs KIN-XI Match 6 2023 scorecard, players score & fall of wickets information on CricTracker.",
      url: "https://www.crictracker.com/live-scores/ft-vs-kin-xi-match-6-t10-ecs-milan-t10-25-apr-2023/full-scorecard/",
      urlToImage:
        "https://www.crictracker.com/images/CricTracker-Facebook-Preview.jpg",
      publishedAt: "2023-04-25T07:30:00Z",
      content:
        "Fresh Tropical will lock horns with Kings XI in the 6th match of the ECS Milan T10 2023 at the Milan Cricket Ground on April 25. Fresh Tropical and Kings XI will cross against each for the first time… [+1350 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "India recall Ajinkya Rahane for World Test Championship final against Australia - The Guardian",
      description:
        "India have recalled middle-order batsman Ajinkya Rahane for the World Test Championship final against Australia at the Oval in June",
      url: "https://www.theguardian.com/sport/2023/apr/25/india-recall-ajinkya-rahane-for-world-test-championship-final-against-australia",
      urlToImage:
        "https://i.guim.co.uk/img/media/cb14ad52329cd3146b84f0342740cbc2def88f88/0_200_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b2fe13a425977c980354a3c7d206744f",
      publishedAt: "2023-04-25T07:19:00Z",
      content:
        "India have recalled middle-order batsman Ajinkya Rahane for the World Test Championship final against Australia at the Oval in June.\r\nThe former vice-captain Rahane played the last of his 82 Tests in… [+1654 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Matt Roller",
      title: "Mark Wood to miss final stages of IPL 2023 - ESPNcricinfo",
      description:
        "He is expected to fly home at some point in the coming weeks for the birth of his daughter",
      url: "https://www.espncricinfo.com/story/mark-wood-to-miss-final-stages-of-ipl-2023-1371239",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/357300/357374.6.jpg",
      publishedAt: "2023-04-25T07:15:58Z",
      content:
        "NewsHe is expected to fly home at some point in the coming weeks for the birth of his daughter\r\nMark Wood has been a revelation for Lucknow Super Giants this season  •  BCCI\r\nMark Wood is set to miss… [+3084 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Amid Ayesha Omar dating rumours, Shoaib Malik says he misses Sania Mirza - Hindustan Times",
      description:
        "Pakistani actor Ayesha Omar was linked to Shoaib Malik amid rumours of his divorce from Sania Mirza. He has now said that he and Sania 'share love like always'.",
      url: "https://www.hindustantimes.com/entertainment/others/amid-divorce-rumours-and-reports-of-him-dating-pakistani-actor-ayesha-omar-shoaib-malik-says-he-misses-sania-mirza-101682405748134.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/04/25/1600x900/Ayesha_Omar_1677043667603_1682405885094.jpg",
      publishedAt: "2023-04-25T07:10:51Z",
      content:
        "Reports of Pakistani cricketer Shoaib Malik and former Indian tennis player Sania Mirza's alleged divorce have been circulating since last year. Rumours of Shoaib's alleged relationship with Pakistan… [+2082 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Purvi Khemani",
      title:
        "IPL Fan Criticises Kolkata Crowd for Supporting Dhoni at Eden Gardens, Gets Slammed - News18",
      description:
        "During the CSK vs KKR match at Eden Gardens, where the stands were a sea of yellow, an IPL fan criticised Kolkata crowd on social media for supporting Dhoni's team instead of their home team.",
      url: "https://www.news18.com/viral/ipl-fan-criticises-kolkata-crowd-for-supporting-dhoni-at-eden-gardens-gets-slammed-7631725.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/04/untitled-54-168239741416x9.jpg",
      publishedAt: "2023-04-25T07:05:00Z",
      content:
        "The IPL match between Chennai Super Kings and Kolkata Knight Riders at Eden Gardens on Sunday created an absolutely electric atmosphere, rivaling even the infamous Chepauk stadium. And who was the ca… [+1872 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Ex-NZ star's message for MSD amid retirement talks: ‘Whenever he decides to...' - Hindustan Times",
      description:
        "Dhoni's CSK currently lead the IPL 2023 points table, having won five of the seven matches they've played so far. | Cricket",
      url: "https://www.hindustantimes.com/cricket/ms-dhoni-retirement-talks-ipl-2023-scott-styris-101682399217822.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/04/25/1600x900/ANI-20230423211-0_1682403145150_1682403187754.jpg",
      publishedAt: "2023-04-25T06:17:16Z",
      content:
        "The ongoing edition of the Indian Premier League (IPL) has been anticipated to be MS Dhoni's last dance in his illustrious cricketing journey and fans have ensured that he experiences a rousing recep… [+1980 chars]",
    },
    {
      source: {
        id: null,
        name: "Bcci.tv",
      },
      author: null,
      title: "India squad for ICC World Test Championship 2023 Final - BCCI",
      description: "India squad for ICC World Test Championship 2023 Final",
      url: "https://www.bcci.tv/articles/2023/news/55556001/india-squad-for-icc-world-test-championship-2023-final?type=press-releases",
      urlToImage:
        "https://assets.bcci.tv/bcci/articles/1682399993_Ghazi11663%20%281%29.jpg",
      publishedAt: "2023-04-25T05:37:55Z",
      content:
        "MEDIA ADVISORY\r\nApril 25, 2023\r\nIndia squad for ICC World Test Championship 2023 Final\r\nThe All-India Senior Selection Committee has picked the squad for the ICC World Test Championship final against… [+577 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Arjun Tendulkar might be dropped: MI's Dream11 prediction vs GT in IPL 2023 - Hindustan Times",
      description:
        "MI face GT in their upcoming IPL 2023 match, on Tuesday. Here is MI's likely XI. | Cricket",
      url: "https://www.hindustantimes.com/cricket/arjun-tendulkar-might-be-replaced-with-another-left-arm-pacer-mi-s-dream11-prediction-vs-gt-in-ipl-2023-101682360885120.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/04/25/1600x900/PTI04-22-2023-000465B-0_1682400281999_1682400344944.jpg",
      publishedAt: "2023-04-25T05:22:10Z",
      content:
        "Mumbai Indians (MI) will take on the defending champions Gujarat Titans (GT) in the IPL 2023 on April 25 at the Narendra Modi Stadium in Ahmedabad. The Rohit Sharma-led side lost their last game to P… [+2778 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "etimes.in",
      title:
        "Anushka Sharma and Virat Kohli pack on the mush-fest at a promotional event in Bengaluru - WATCH - Times of India",
      description:
        "Photos and videos from Anushka Sharma and Virat Kohli's friendly match soon went viral online with fans going gaga",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/anushka-sharma-and-virat-kohli-pack-on-the-mush-fest-at-a-promotional-event-in-bengaluru-watch/articleshow/99749089.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99749240,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-85532/99749240.jpg",
      publishedAt: "2023-04-25T05:20:00Z",
      content: null,
    },

    {
      source: {
        id: null,
        name: "Bqprime.com",
      },
      author: "Rishabh Mishra",
      title:
        "Stock Market Today: Sensex, Nifty Rise For The Fourth Day As PSU Banks Gain; Consumer Durables Decline - BQ Prime",
      description:
        "Sensex closed up 75 points or 0.12% at 60,130.71 while Nifty was higher by 26 points or 0.15% at 17,769.25.",
      url: "https://www.bqprime.com/markets/stock-market-live-updates-25-april-2023-sgx-nifty-signals-positive-start-bajaj-auto-nestle-iifl-securities-persistent-in-focus",
      urlToImage:
        "https://gumlet.assettype.com/bloombergquint%2F2019-12%2Fea4dea5a-9021-4bdb-b56a-e67f0942cd84%2Fbse_bulls.jpg?rect=0%2C248%2C3998%2C2099&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2023-04-25T12:05:48Z",
      content:
        "Indian equity benchmarks ended Tuesday with gains after recovering from day's low in early trade. Advances in PSU banking stocks were offset by the decline in consumer durables. Sensex closed above t… [+888 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Tata Consumer Products Q4: Net profit climbs 23% to Rs 269 crore, beats estimates - Moneycontrol",
      description:
        "Net profit was expected to rise a modest 3.7 percent YoY to Rs 245 crore.",
      url: "https://www.moneycontrol.com/news/business/earnings/tata-consumer-products-q4-net-profit-climbs-23-to-rs-269-crore-beats-estimates-10473111.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/11/Image_2_1280X720Pixels--770x433.jpg",
      publishedAt: "2023-04-25T11:03:48Z",
      content:
        "Tata Consumer Products on April 25 reported consolidated net profit for the quarter ended March 2023 at Rs 268.59 crore, up 23.46 percent from Rs 217.54 crore in the same quarter last year.\r\nRevenue … [+1420 chars]",
    },
    {
      source: {
        id: null,
        name: "DailyFX",
      },
      author: "Zain Vawda",
      title:
        "Gold Price Forecast: Another Rejection of the $2000 Level, A Sign of Exhaustion? - DailyFX",
      description:
        "Spot Gold fails at the $2000 hurdle as bulls seem exhausted. Will US earnings and PCE data drive sentiment reignite the precious metal ahead of FOMC?",
      url: "https://www.dailyfx.com/news/forex-gold-price-forecast-another-rejection-of-the-2000-level-a-sign-of-exhaustion-20230425.html",
      urlToImage: "https://a.c-dn.net/b/4gd82H/GOLD_23.JPG",
      publishedAt: "2023-04-25T10:56:23Z",
      content:
        "GOLD PRICE, CHARTS AND ANALYSIS:\r\nRecommended by Zain Vawda\r\nGet Your Free Gold Forecast\r\nREAD MORE: Gold and Silver Price Outlook: Retail Traders Increase Bearish Bets, a Bullish Sign?\r\nGold (XAU/US… [+3960 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Sneha Kulkarni",
      title:
        "EPF e-passbook facility down: Members can view passbook on UMANG app, here is how - Economic Times",
      description:
        "EPFO, on its website, has said that members can view their passbook on the UMANG app. According to the EPF website, “Member Passbook Service is accessible through UMANG App.",
      url: "https://economictimes.indiatimes.com/wealth/save/epf-e-passbook-facility-down-members-can-view-passbook-on-umang-app-here-is-how/articleshow/99760135.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-99760193,width-1070,height-580,imgsize-295403,overlay-etwealth/photo.jpg",
      publishedAt: "2023-04-25T10:51:00Z",
      content:
        "Many users who were unable to view their passbooks online on the EPFO-specific portal reported that the facility to access and download Employees' Provident Fund (EPF) passbooks through the portal ha… [+2352 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Rakesh Patil",
      title:
        "Closing Bell: Market ends with marginal gains; PSU Bank, power shine - Moneycontrol",
      description: "The BSE midcap and smallcap indices ended on a flat note.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-april-25-latest-news-bse-nse-sensex-nifty-covid-coronavirus-ipca-labs-mahindra-lifespace-infosys-crompton-greaves-indusind-bank-mahindra-logistics-lt-tech-10469511.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/04/market_volatile1-1-770x433.jpg",
      publishedAt: "2023-04-25T10:34:09Z",
      content:
        "<li>Mankind Pharma IPO subscribed 6% on first day of bidding\r\n</li><li>Morgan Stanley maintains overweight rating on IndusInd Bank, target price of Rs 1,525\r\n</li><li>Zydus Lifesciences gets final US… [+5247 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Nykaa stock down by nearly 2% after it announces key appointments | Mint - Mint",
      description:
        "Nykaa on Monday appointed employees across the technology, finance, business, and marketing departments.",
      url: "https://www.livemint.com/market/stock-market-news/nykaa-stock-down-by-nearly-2-after-it-announces-key-appointments-11682415684341.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/04/25/600x338/FSN-E-COMMERCE-V-RESULTS--0_1666679498185_1666679498185_1682416534102.JPG",
      publishedAt: "2023-04-25T09:56:03Z",
      content:
        "FSN E-Commerce Ventures Ltd, the parent company of beauty and fashion e-commerce marketplace Nykaa, shares were down by nearly two per cent on Tuesday after the company appointed several new senior l… [+2234 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Navdeep Singh",
      title:
        "ITC hits all-time high, pips Infosys to become 6th largest company - Economic Times",
      description:
        "Despite the stellar rally, ITC continues to trade at a steep discount to HUL. ITC's price-to-earnings multiple is 28 times, whereas that of HUL's is nearly twice at 60 times.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/itc-hits-all-time-high-pips-infosys-to-become-6th-largest-company/articleshow/99758257.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-99758150,width-1070,height-580,imgsize-11700,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-04-25T09:53:00Z",
      content:
        "Shares of the diversified conglomerate ITC hit a fresh all-time high, and it pipped index heavyweight Infosys to become the 6th largest company by market capitalization. The cigarette major beats the… [+1859 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Business Desk",
      title:
        "25,000% Return! Rs 40,000 Investment In This Stock would Have Made You Crorepati - News18",
      description:
        "In the past three years the stock has grown more than 300 per cent.",
      url: "https://www.news18.com/business/25000-return-rs-40000-investment-in-this-stock-would-have-made-you-crorepati-7635061.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/04/wp-image-1001-168241530216x9.jpg",
      publishedAt: "2023-04-25T09:35:53Z",
      content:
        "The Indian share market is price sensitive, which means it is highly vulnerable to exterior shocks and even a small disturbance in the domestic or overseas environment can bring about a multiplier ef… [+1612 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Akash Podishetti",
      title:
        "HDFC AMC Q4 Results: Profit rises 10% YoY to Rs 376 crore; dividend declared at Rs 48/share - The Economic Times",
      description:
        "​Further, the Board has recommended a dividend of Rs 48 per equity share for the financial year ended March 2023.",
      url: "https://economictimes.indiatimes.com/markets/stocks/earnings/hdfc-amc-q4-results-profit-rises-10-yoy-to-rs-376-crore-dividend-declared-at-rs-48/share/articleshow/99756905.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-99756958,width-1070,height-580,imgsize-224366,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-04-25T09:11:00Z",
      content:
        "HDFC AMC's standalone net profit jumped 10% to Rs 376 crore in the fourth quarter, compared with Rs 343 crore in the same period last year.Revenue from operations, meanwhile, rose 5% to Rs 541 crore … [+1636 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Vidya Sreedhar",
      title:
        "Bajaj Finance Q4 preview: PAT seen rising 30% YoY on strong NII growth - Economic Times",
      description:
        "While shares of the company turned multibagger in 3 years time, it has underperformed the benchmark in 2023. So far this year, the stock has corrected 10% whereas the Nifty 50 has lost 3%.",
      url: "https://economictimes.indiatimes.com/markets/stocks/earnings/bajaj-finance-q4-preview-pat-seen-rising-30-yoy-on-strong-nii-growth/articleshow/99756410.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-99756432,width-1070,height-580,imgsize-10564,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-04-25T08:55:00Z",
      content:
        "Bajaj Finance is seen reporting strong double-digit growth in the net profit for the quarter ended March on the back of high interest income, growth in the loan book, and stable costs. Consolidated n… [+1917 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Gourab Das",
      title:
        "India's GDP aim faces risks from a little boy, a sturdy cartel & big economies - Economic Times",
      description:
        "So-called little boy or El Nino, heavyweight oil cartel's surprise output cut and banking risks in some advanced economies pose threat to India's real economic growth target. However, there are other positives that can soothe macroeconomic woes, while India r…",
      url: "https://economictimes.indiatimes.com/news/economy/indicators/indias-gdp-aim-faces-risks-from-a-little-boy-cartels-strength-and-big-economies/articleshow/99755050.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-99755255,width-1070,height-580,imgsize-95390,overlay-economictimes/photo.jpg",
      publishedAt: "2023-04-25T08:15:00Z",
      content:
        "India's 6.5% real economic growth aim for this financial year faces increasing risks from so-called little boy or El Nino, heavyweight oil cartel's surprise output cut and banking risks in some advan… [+5715 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Today",
      },
      author: "Danny D'Cruze",
      title:
        "Maruti Suzuki upgrades all vehicles to meet BS6 Phase II regulations, adds Electronic Stability Control - Business Today",
      description:
        "Maruti Suzuki has a comprehensive offering of 15 vehicles ranging from hatchbacks, sedans, SUVs, MUVs, and commercial vehicles",
      url: "https://www.businesstoday.in/auto/story/maruti-suzuki-upgrades-all-vehicles-to-meet-bs6-phase-ii-regulations-adds-electronic-stability-control-378740-2023-04-25",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/maruti_suzuki_fronx-sixteen_nine.jpg",
      publishedAt: "2023-04-25T08:01:35Z",
      content:
        "Maruti Suzuki India has announced that it has upgraded its entire range of vehicles to comply with the updated Bharat Stage 6 Phase II emissions regulations. All Maruti Suzuki hatchbacks, sedans, MPV… [+1692 chars]",
    },
    {
      source: {
        id: null,
        name: "Entrackr",
      },
      author: "Entrackr",
      title:
        "Lokal bags Rs 120 Cr in Series B from new and existing backers - Entrackr",
      description: null,
      url: "https://entrackr.com/2023/04/lokal-bags-rs-120-cr-in-series-b-from-new-and-existing-backers/",
      urlToImage: null,
      publishedAt: "2023-04-25T07:16:37Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Prachi Ahluwalia",
      title:
        "Mahindra Bolero Maxx Pik-Up range launched at Rs 7.85 lakh: Gets 2,000 kg payload capacity - Times of India",
      description:
        "Cars News: The 2023 Mahindra Bolero Maxx Pik-Up range comes in two series – HD series (HD 2.0L, 1.7L and 1.7, 1.3) and City series (City 1.3, 1.4, 1.5 and City C",
      url: "https://timesofindia.indiatimes.com/auto/cars/mahindra-bolero-maxx-pik-up-range-launched-at-rs-7-85-lakh-gets-2000-kg-payload-capacity/articleshow/99753263.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-99753378,width-1070,height-580,imgsize-876328,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-04-25T07:12:00Z",
      content:
        '"No car comes close to Volkswagen Taigun and Virtus in India in terms of safety": Ashish Gupta',
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Utkarsh Deshmukh",
      title:
        "Hyundai Exter micro SUV: Front-end design of the Tata Punch challenger officially revealed - CarToq.com",
      description:
        "The South Korean automaker, Hyundai Motor India, recently released the first design render of its forthcoming micro-SUV, Exter. With this design render, the company has provided a glimpse of what the new SUV may look like. For those who are unaware, Exter wil…",
      url: "https://www.cartoq.com/hyundai-exter-micro-suv-front-end-design-of-the-tata-punch-challenger-officially-revealed/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/04/hyundai-exter-exterior-design.jpg",
      publishedAt: "2023-04-25T07:11:59Z",
      content:
        "The South Korean automaker, Hyundai Motor India, recently released the first design render of its forthcoming micro-SUV, Exter. With this design render, the company has provided a glimpse of what the… [+3057 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Suchitra Mandal",
      title: "Zomato share price gains 8% on large block deal - Moneycontrol",
      description:
        "Zomato's 1.5 crore shares, or 0.2 percent equity, worth Rs 88.2 crore changed hands at an average price of Rs 59 a share. Buyers and sellers were not immediately known",
      url: "https://www.moneycontrol.com/news/business/stocks/zomato-share-price-gains-8-on-large-block-deal-10471911.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/04/ZOMATO-770x433.jpg",
      publishedAt: "2023-04-25T06:49:21Z",
      content:
        "Zomato's share price gained 8 percent in the morning trade on April 25 following a large block deal in which 1.5 crore shares, or 0.2 percent of equity, worth Rs 88.2 crore changed hands at an averag… [+2318 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Kshitij Anand",
      title:
        "Chart Check: Why HDFC Bank could be on the brink of a downtrend; what investors should do - Economic Times",
      description:
        "A careful analysis of weekly charts suggests that the stock touched the Upper Bollinger band reversed which gave a confirmed downtrend, and the stock is in an overbought zone which is conformed by the RSI, suggest experts.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/chart-check-why-hdfc-bank-could-be-on-the-brink-of-a-downtrend-what-investors-should-do/articleshow/99751464.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-99751710,width-1070,height-580,imgsize-24476,overlay-etmarkets/photo.jpg",
      publishedAt: "2023-04-25T06:23:00Z",
      content:
        "HDFC Bank, part of the private banking space, hit a record high of Rs 1,715 on 17th April 2023, but failed to hold on to the momentum. The stock price of the private sector lender is showing signs of… [+2871 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "First Republic Bank LOSES $100 billion in deposits | World Business Watch | WION - WION",
      description:
        "The banking crisis in the United States is far from over. A month after the collapse of Silicon Valley and Signature Bank. Another one, First Republic Bank, ...",
      url: "https://www.youtube.com/watch?v=nZlxY0_7u7I",
      urlToImage: "https://i.ytimg.com/vi/nZlxY0_7u7I/maxresdefault.jpg",
      publishedAt: "2023-04-25T06:06:57Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Larsentoubro.com",
      },
      author: null,
      title:
        "L&T Construction Wins (Significant*) Orders for its Power Transmission & Distribution Business - L&T",
      description:
        "Mumbai, April 25, 2023: The Power Transmission & Distribution (PT&D) Business of Larsen & Toubro (L&T) Construction has recently secured EPC orders in India and overseas.",
      url: "https://www.larsentoubro.com/pressreleases/2023-04-25-lt-construction-wins-significant-orders-for-its-power-transmission-distribution-business/",
      urlToImage: null,
      publishedAt: "2023-04-25T06:03:14Z",
      content:
        "Mumbai: The Power Transmission &amp; Distribution (PT&amp;D) Business of Larsen &amp; Toubro (L&amp;T) Construction has recently secured EPC orders in India and overseas.\r\nUnder the umbrella of the R… [+1497 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "PTI",
      title:
        "Zypp Electric, Zomato join hands to deploy 1-lakh e-scooters for last-mile delivery by 2024 - Moneycontrol",
      description:
        "As part of the tie-up, Zypp will also provide delivery partners to Zomato for the last-mile deliveries in various cities across the country, Zypp said in a statement.",
      url: "https://www.moneycontrol.com/news/business/zypp-electric-zomato-join-hands-to-deploy-1-lakh-e-scooters-for-last-mile-delivery-by-2024-10471591.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/07/Zomato-IPO-1-770x433.jpg",
      publishedAt: "2023-04-25T05:58:09Z",
      content:
        "Electric mobility startup Zypp Electric on Tuesday said it plans to deploy 1-lakh electric scooters in collaboration with Zomato for last-mile delivery by 2024.\r\nAs part of the tie-up, Zypp will also… [+1570 chars]",
    },

    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author:
        "Will Horner, WSJ Staff, Patricia Kowsmann, Caitlin McCabe, Quentin Webb, Rebecca Feng",
      title:
        "Stock Market Today: Dow Futures Fall Ahead of Tech Earnings; First Republic Tumbles - The Wall Street Journal",
      description:
        "Live updates on stocks and financial news, including the S&P 500, Dow and Nasdaq Composite.",
      url: "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-04-25-2023",
      urlToImage: "https://images.wsj.net/im-589547/social",
      publishedAt: "2023-04-25T12:41:00Z",
      content:
        "Another slew of earnings is out Tuesday, including from Microsoft and Google parent Alphabet after the close. Check back for updates on market reaction as the numbers pour in.\r\nMeantime, stock future… [+509 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Dani Romero",
      title:
        "Stock futures edge lower ahead of big tech earnings: Stock market news today - Yahoo Finance",
      description:
        "U.S. stock futures were lower on Tuesday as tech conglomerates were set to highlight a busy earnings week.",
      url: "https://finance.yahoo.com/news/stock-market-news-today-live-updates-april-25-2023-115832453.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/IFXlaNipGNjdo1YZ1VmzNw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/93433530-c50f-11ed-bfff-909a3b6037f3",
      publishedAt: "2023-04-25T11:58:32Z",
      content:
        "U.S. stock futures were lower on Tuesday as tech conglomerates were set to highlight a busy earnings week.\r\nFutures on the S&amp;P 500 (^GSPC) slid by 0.44%, while the Dow Jones Industrial Average (^… [+2513 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "David Goldman",
      title: "3M announces mass layoffs as manufacturing slows - CNN",
      description:
        "3M announced significant layoffs Tuesday as part of yet another major restructuring plan as the manufacturing sector prepares for a possible recession and slumping demand for goods.",
      url: "https://www.cnn.com/2023/04/25/business/3m-layoffs/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230425070432-3m-headquarters-file-restricted-012623.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-25T11:43:00Z",
      content:
        "3M announced significant layoffs Tuesday as part of yet another major restructuring plan as the manufacturing sector prepares for a possible recession and slumping demand for goods.\r\nThe manufacturin… [+1980 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Pras Subramanian",
      title:
        "GM earnings: Strong Q1 revenue and profit, full-year guidance lifted - Yahoo Finance",
      description:
        "General Motors reported strong first quarter earnings on Tuesday morning, continuing its strong run of quarterly reports as the largest automaker in the U.S....",
      url: "https://finance.yahoo.com/news/gm-earnings-strong-q1-revenue-and-profit-full-year-guidance-lifted-112052166.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/DPRFuCOAjMwrXnY9G9SlwQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-07/b48fea40-039e-11ed-bbd5-547d718f6fa5",
      publishedAt: "2023-04-25T11:20:52Z",
      content:
        "General Motors (GM) reported strong first quarter earnings on Tuesday morning, continuing its strong run of quarterly reports as the largest automaker in the U.S. gears up for a big year of electric … [+3365 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Brooke DiPalma",
      title:
        "McDonald's earnings: Sales growth tops estimates as prices, traffic boost results - Yahoo Finance",
      description:
        "With investor concerns about the US economy continuing to swirl, investors will look for signs on the health of the consumer when McDonald's reports results ...",
      url: "https://finance.yahoo.com/news/mcdonalds-earnings-first-quarter-results-april-25-2023-165526776.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/kH.X_7R6jSNHceQSOlQiSA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/480a7750-d29c-11ed-b20e-1c7f618d6737",
      publishedAt: "2023-04-25T11:17:08Z",
      content:
        "McDonald's (MCD) reported first quarter results Tuesday that beat expectations as sales were boosted by higher prices and more customer traffic.\r\nThe company reports same-store sales rose 12.6% in bo… [+2544 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Leslie Josephs",
      title:
        "JetBlue posts quarterly loss but forecasts profit thanks to strong travel demand - CNBC",
      description:
        "JetBlue posted a loss for the first three months of the year but forecast a profit for the second quarter thanks to strong travel demand.",
      url: "https://www.cnbc.com/2023/04/25/jetblue-airways-jblu-earnings-q1-2023.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107230289-1682383966045-IMG_0433.jpg?v=1682421217&w=1920&h=1080",
      publishedAt: "2023-04-25T11:13:37Z",
      content:
        "JetBlue Airways posted a loss for the first three months of the year but joined other carriers in forecasting a profit for the second quarter thanks to strong travel demand.\r\nJetBlue estimated per-sh… [+2265 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Paul Davidson, USA TODAY",
      title:
        "Is a recession coming by 2024? Here's what economists are saying. - USA TODAY",
      description:
        "Most economists who work for companies and trade groups no longer project a recession within a year, survey shows. But many see employment dropping.",
      url: "https://www.usatoday.com/story/money/2023/04/24/recession-within-year-unlikely-survey-shows/11715581002/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2022/07/19/USATODAY/usatsports/MotleyFool-TMOT-5d01a65c-recession-getty.jpeg.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2023-04-25T11:11:55Z",
      content:
        "Is the U.S. about to be socked by a recession?\r\nIt depends on whom you ask. And the day of the week.\r\nFifty-four percent of economists at companies and trade groups put the odds of a downturn in the … [+4152 chars]",
    },
    {
      source: {
        id: null,
        name: "Verizon Communications",
      },
      author: null,
      title:
        "Verizon begins 2023 with rapid network expansion and the most broadband additions in over a decade - Verizon",
      description:
        "Company's total wireless postpaid phone gross additions increased 5.3 percent year over year Cash flow from operations increased $1.5 billion YoY, and free cash flow1 increased $1.3 billion YoY.",
      url: "https://www.verizon.com/about/news/verizon-begins-2023-rapid-network-expansion-and-most-broadband-additions-over-decade",
      urlToImage:
        "https://www.verizon.com/about/sites/default/files/2023-04/1q-2023-earnings-hero-1230x690.jpg",
      publishedAt: "2023-04-25T10:50:42Z",
      content:
        "Download News Release PDF\r\nDownload Infographic PDF\r\nDownload 1Q Financials\r\nConsolidated:\r\n<ul><li>$1.17 in EPS, compared with $1.09 in first-quarter 2022; adjusted EPS1, excluding a special item, o… [+13214 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jon Porter",
      title:
        "Spotify passes 500 million monthly active users for the first time - The Verge",
      description:
        "Spotify has announced its current number of monthly active users and paid subscribers as part of its first quarter 2023 earnings report.",
      url: "https://www.theverge.com/2023/4/25/23695790/spotify-earnings-q1-2023-monthly-active-users-515-million",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/CKTAR2b2HRdXAwNzIApGXjHrpng=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951389/STK088_VRG_Illo_N_Barclay_6_spotify.jpg",
      publishedAt: "2023-04-25T10:29:34Z",
      content:
        "Spotify passes 500 million monthly active users for the first time\r\nSpotify passes 500 million monthly active users for the first time\r\n / The companys latest financial results also show paid subscri… [+3114 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Aarian Marshall",
      title: "Ford Jump Starts Its Attempt to Revive Detroit - WIRED",
      description:
        "The first phase of the automaker's redevelopment of the historic Michigan Central station is aimed at bringing more tech workers to the city—and to Ford.",
      url: "https://www.wired.com/story/ford-jump-starts-its-attempt-to-revive-detroit/",
      urlToImage:
        "https://media.wired.com/photos/64471deb93ba5cd8bbdc9295/191:100/w_1280,c_limit/Newlab-at-Michigan-Central-Exterior-%C2%A9Jason%20Keen-Business.jpg",
      publishedAt: "2023-04-25T10:00:00Z",
      content:
        "For almost two decades after it opened in 1913, Michigans Central Station was a major stop on the nations interurban rail network. Then the private car took over the US, and Detroit declined. By the … [+3196 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Jenni Reid",
      title:
        "KitKat and Nescafe owner Nestle says it's raised prices by nearly 10% so far this year - CNBC",
      description:
        "Nestle raised prices by 8.2% in 2022, but CEO Mark Schneider had warned further rises were to come to defend its margins.",
      url: "https://www.cnbc.com/2023/04/25/nestle-says-its-raised-prices-by-10percent-this-quarter.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107230372-1682409644450-gettyimages-1234257649-UK_NESTLE.jpeg?v=1682420003&w=1920&h=1080",
      publishedAt: "2023-04-25T09:59:27Z",
      content:
        'Consumer goods firm Nestle raised prices by 9.8% in the first quarter, attributing this to "significant cost inflation."\r\nThe Switzerland-based company on Tuesday reported sales revenue up 5.6% in th… [+2101 chars]',
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Courtney Cole",
      title:
        "'It's going to hit the consumer hard,' Those with higher credit scores may pay higher mortgage fees - CBS Boston",
      description:
        "Changes in the mortgage industry could spell bad news even if you have good credit.",
      url: "https://www.cbsnews.com/boston/news/mortgage-fee-changes-good-high-credit-scores/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/11/336026c6-e382-44b6-9784-a09ccaafa5a6/thumbnail/1200x630/07831178479c589d98a08bc51d34a856/gettyimages-1411250722-1.jpg",
      publishedAt: "2023-04-25T09:15:00Z",
      content:
        "BOSTON - Changes in the mortgage industry could spell bad news even if you have good credit. \r\nBeginning May 1, some people with higher credit scores may actually end up paying a higher fee while tho… [+988 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Nicholas Gordon",
      title:
        "‘Crypto is dead in America’ thanks to regulators, says investor Chamath Palihapitiya, who once thought Bitcoin could hit $200,000 - Yahoo Finance",
      description:
        "“The United States authorities have firmly pointed their guns at crypto,” the investor said in a podcast episode released Saturday.",
      url: "https://finance.yahoo.com/news/crypto-dead-america-thanks-regulators-082014082.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/dE6hwowHxrkGni.hIp2jVA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/fortune_175/954bd1837a09cf1b22701d064ed876c7",
      publishedAt: "2023-04-25T08:20:14Z",
      content:
        'Venture investor Chamath Palihapitiya, who once thought that Bitcoin had "effectively replaced gold", now thinks that crypto is dead in America due to U.S. regulatory pressure on the sector.\r\nMore fr… [+4576 chars]',
    },
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Omkar Godbole",
      title:
        "Bitcoin's 50-Day Moving Average in Focus for Crypto Analysts After 11% Price Pullback - CoinDesk",
      description:
        "A break below the average would call into question the bull market's strength, one analyst said.",
      url: "https://www.coindesk.com/markets/2023/04/25/bitcoins-50-day-average-becomes-focal-point-for-crypto-analysts-after-11-price-pullback/",
      urlToImage:
        "https://www.coindesk.com/resizer/Dl0wKVe9P61DK-Peqz2AKbQ9FaI=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/P2HXNZDDWBHHFIR7N3BHWIKFHA.jpg",
      publishedAt: "2023-04-25T07:42:00Z",
      content:
        "Bitcoin (BTC) has come under pressure of late amid weakness in technology stocks and an uptick in bond yields. The pullback has some analysts focusing on a key average of bitcoin's price for cues abo… [+2501 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "UBS CEO Ermotti Discusses Inflows, Credit Suisse - Bloomberg Television",
      description: null,
      url: "https://www.youtube.com/watch?v=L5RmCUkEyBY",
      urlToImage: null,
      publishedAt: "2023-04-25T07:22:42Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Hyundai Motor bolsters US presence with $5 bln EV battery venture - Reuters.com",
      description:
        'South Korea\'s Hyundai Motor Co <a href="https://www.reuters.com/companies/005380.KS" target="_blank">(005380.KS)</a> said on Tuesday it had finalised a $5 billion electric vehicle (EV) battery joint venture in the U.S., boosting electrification efforts in its…',
      url: "https://www.reuters.com/business/autos-transportation/hyundai-motors-q1-net-profit-jumps-109-beating-expectations-2023-04-25/",
      urlToImage:
        "https://www.reuters.com/resizer/zsfR_AMxQpbMJuI9uT1OD_yxNLc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6AASLF2KWJOQDGJAEYPUEVGDGE.jpg",
      publishedAt: "2023-04-25T07:22:00Z",
      content:
        "SEOUL, April 25 (Reuters) - South Korea's Hyundai Motor Co (005380.KS) said on Tuesday it had finalised a $5 billion electric vehicle (EV) battery joint venture in the U.S., boosting electrification … [+3267 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Founder of startup Frank accused of 'old school fraud' - MSNBC",
      description:
        "Writer Tarpley Hitt joins to explain why Charlie Javice was charged with defrauding JPMorgan Chase out of $175 million dollars. » Subscribe to MSNBC: http://...",
      url: "https://www.youtube.com/watch?v=sn1jZQax1vM",
      urlToImage: "https://i.ytimg.com/vi/sn1jZQax1vM/maxresdefault.jpg",
      publishedAt: "2023-04-25T05:00:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Silvia Amaro",
      title:
        "UBS profits hit by legacy legal costs as it nears Credit Suisse merger - CNBC",
      description:
        "UBS reported $1.03 billion in net profit for the first quarter, down 52% year-on-year amid a legacy litigation matter.",
      url: "https://www.cnbc.com/2023/04/25/ubs-q1-2023-results-post-deal-to-buy-credit-suisse.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107220838-1680696187601-gettyimages-1250787017-AFP_33CN8U7.jpeg?v=1682398734&w=1920&h=1080",
      publishedAt: "2023-04-25T04:58:54Z",
      content:
        'UBS reported a 52% annual drop in net profit on Tuesday amid a legacy litigation matter, but maintained it is a "source of stability" for its clients during periods of high uncertainty.\r\nThese are th… [+2276 chars]',
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: null,
      title:
        "China's Deepening Selloff Shows Investors Are Losing Confidence - Bloomberg",
      description:
        "A selloff in Chinese equities is deepening as a barrage of economic and geopolitical risks stack up, with global funds accelerating their exodus.",
      url: "https://www.bloomberg.com/news/articles/2023-04-25/china-s-deepening-selloff-shows-investors-are-losing-confidence",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iG8EL51.GkeU/v0/1200x800.jpg",
      publishedAt: "2023-04-25T04:01:00Z",
      content:
        "A selloff in Chinese equities is deepening as a barrage of economic and geopolitical risks stack up, with global funds accelerating their exodus.\r\nThe MSCI China Index lost as much as 2.6% Tuesday, s… [+191 chars]",
    },
    {
      source: {
        id: null,
        name: "OregonLive",
      },
      author: "Jeff Manning | The Oregonian/OregonLive",
      title:
        "Phil and Penny Knight pledge $400 million for Portland’s historically Black Albina neighborhood - OregonLive",
      description:
        "The investment pairs two powerhouses in Knight, the billionaire Nike co-founder, and Rukaiyah Adams, the Portland financial expert and community leader.",
      url: "https://www.oregonlive.com/business/2023/04/phil-and-penny-knight-pledge-400-million-for-portlands-historically-black-albina-neighborhood.html",
      urlToImage:
        "https://www.oregonlive.com/resizer/8Ce4e03gneUAXnCrTFYvlJJatVY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M46J5AKMSVHDJJM6GDQTME7KUQ.JPG",
      publishedAt: "2023-04-25T03:17:00Z",
      content:
        "Phil and Penny Knight on Monday pledged to contribute $400 million to the newly formed 1803 Fund, a local effort intended to strengthen Portlands Black community.\r\nThe 1803 Fund will combine elements… [+4789 chars]",
    },

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
      author: "michael.hicks@futurenet.com (Michael L Hicks)",
      title: "How to control your Spotify music from the Strava app",
      description:
        "Spotify and Strava have partnered to add playback controls and playlists into the Record screen of the Strava app. Here's how to sync the two apps.",
      url: "https://www.androidcentral.com/apps-software/how-to-control-spotify-music-from-strava-app",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ZDzBNp2HV9egRouJiMZq5V-1200-80.jpeg",
      publishedAt: "2023-04-25T18:56:12Z",
      content:
        "Are you sick of swapping between your fitness app and your music app during workouts? The new Strava-Spotify streaming partnership aims to solve that.\r\nSo long as you have a Spotify account, you can … [+3846 chars]",
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
      author: "Juli Clover",
      title: "TSMC Struggling to Make Enough 3-Nanometer Chips for Apple",
      description:
        'Apple supplier TSMC is "straining" to produce enough of its newest 3-nanometer chips to meet demand for Apple\'s upcoming devices, according to a report from EE Times. Analysts believe TSMC is having issues with tools and yield, impacting the ramp up to volume…',
      url: "https://www.macrumors.com/2023/04/25/tsmc-apple-3nm-chip-yield-struggles/",
      urlToImage:
        "https://images.macrumors.com/t/imKuUlfjYQqdqL6XgYAx8ySQ06c=/1810x/article-new/2021/06/3nm-apple-silicon-feature.jpg",
      publishedAt: "2023-04-25T20:20:28Z",
      content:
        'Apple supplier TSMC is "straining" to produce enough of its newest 3-nanometer chips to meet demand for Apple\'s upcoming devices, according to a report from EE Times. Analysts believe TSMC is having … [+1323 chars]',
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title:
        "iOS 17 Rumored to Add New Lock Screen, Apple Music, and App Library Features",
      description:
        "iOS 17 will include new features and changes across the Lock Screen, Apple Music, App Library, and Control Center, according to a Weibo post this week from the same account that revealed Apple would be launching the iPhone 14 in Yellow.\n\n\n\n\n\nThe post lists se…",
      url: "https://www.macrumors.com/2023/04/25/ios-17-lock-screen-apple-music-rumors/",
      urlToImage:
        "https://images.macrumors.com/t/2ofw9g5kA2rRBh-5uj9QHg9mBtw=/2250x/article-new/2023/02/iOS-17-on-Phone-Feature.jpg",
      publishedAt: "2023-04-25T16:35:35Z",
      content:
        "iOS 17 will include new features and changes across the Lock Screen, Apple Music, App Library, and Control Center, according to a Weibo post this week from the same account that revealed Apple would … [+1739 chars]",
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
        "After years of rumors, Apple's AR/VR headset is expected to be unveiled at the tech giant's Worldwide Developers Conference in June. The headset will launch with a ton of features as Apple tries to e… [+1793 chars]",
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
        "After being teased earlier this year, OnePlus' first tablet, the OnePlus Pad, will be available for preorder starting on Friday and cost $479, the company revealed on Tuesday. \r\nPeople can also purch… [+898 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Imad Khan",
      title:
        "Google Authenticator Now Syncs One-time Passcodes to Your Account - CNET",
      description:
        "This feature will come in handy if you ever lose your phone. Here's how to enable it.",
      url: "https://www.cnet.com/tech/services-and-software/google-authenticator-now-syncs-one-time-passwords-to-your-account/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/8eb74ee90d378f4b8b839422b2143cbe4151e3af/hub/2020/05/18/ae160317-f229-48e7-9b3a-5dd91be432b4/google-authenticator.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T18:15:00Z",
      content:
        "Google Authenticator, the app that gives your accounts additional security by generating timed codes for two-factor authentication, will now be able to store those one-time passwords on your Google a… [+1710 chars]",
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
        'After nearly a year of savings and CD interest rates steadily climbing, sky-high annual percentage yields are stalling -- and some are even starting to drop. \r\n"Banks are reducing interest rates on C… [+7147 chars]',
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
        "Ghostface terrorizes the Big Apple in Scream 6.\r\nParamount Pictures\r\nIf you've been debating going to a movie theater to watch Scream 6, a new option has crept up. Paramount Plus said Monday that sub… [+3400 chars]",
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
      author: "Juli Clover",
      title:
        "iOS 17 to Include Mood Tracker and Health App for iPad, AI-Based Health Coaching Service Coming in 2024",
      description:
        "The iOS 17 update that Apple plans to show off in June will include several new health-related features, according to Bloomberg's Mark Gurman. There will be a feature for tracking mood, plus Apple plans to bring the Health app to the iPad for the first time.\n…",
      url: "https://www.macrumors.com/2023/04/25/ios-17-health-app-updates/",
      urlToImage:
        "https://images.macrumors.com/t/UCeGcUpfGc84SXVWBT9k79vbx4E=/2048x/article-new/2023/04/apple-health-app.jpg",
      publishedAt: "2023-04-25T18:43:50Z",
      content:
        "The iOS 17 update that Apple plans to show off in June will include several new health-related features, according to Bloomberg's Mark Gurman. There will be a feature for tracking mood, plus Apple pl… [+2221 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title: "Apple Seeds Third Beta of tvOS 16.5 to Developers",
      description:
        "Apple today seeded the third beta of an upcoming tvOS 16.5 update to developers for testing purposes, with the beta coming two weeks after the launch of the second tvOS 16.5 beta. \n\n\n\n\n\nRegistered developers are able to download the tvOS 16.5 update by downlo…",
      url: "https://www.macrumors.com/2023/04/25/apple-seeds-tvos-16-5-beta-2-to-developers/",
      urlToImage:
        "https://images.macrumors.com/t/6gz7t5tbqOJ-rFRIaNhdHKUzrUI=/2500x/article-new/2022/10/Apple-TV-2022-Feature-Orange.jpg",
      publishedAt: "2023-04-25T17:02:00Z",
      content:
        "Apple today seeded the third beta of an upcoming tvOS 16.5 update to developers for testing purposes, with the beta coming two weeks after the launch of the second tvOS 16.5 beta. \r\nRegistered develo… [+665 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title: "Apple Seeds Third Beta of watchOS 9.5 to Developers",
      description:
        "Apple today seeded the third beta of an upcoming watchOS 9.5 update to developers for testing purposes, with the software update coming two weeks after the launch of the second watchOS 9.5 beta.\n\n\n\n\n\nTo install the watchOS 9.5 update, developers will need to …",
      url: "https://www.macrumors.com/2023/04/25/apple-seeds-watchos-9-5-beta-3-to-developers/",
      urlToImage:
        "https://images.macrumors.com/t/eXhNHYXbNppBslGlpQBfxwVlS6g=/2250x/article-new/2022/06/Apple-watchOS-9-Feature.jpg",
      publishedAt: "2023-04-25T17:03:00Z",
      content:
        "Apple today seeded the third beta of an upcoming watchOS 9.5 update to developers for testing purposes, with the software update coming two weeks after the launch of the second watchOS 9.5 beta.\r\nTo … [+844 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title:
        "Apple Seeds Third Betas of iOS 16.5 and iPadOS 16.5 to Developers",
      description:
        "Apple today seeded the third betas of upcoming iOS 16.5 and iPadOS 16.5 updates to developers for testing purposes, with the software coming two weeks after the launch of the second betas.\n\n\n\n\n\nRegistered developers can opt in to the betas by opening up the S…",
      url: "https://www.macrumors.com/2023/04/25/apple-seeds-ios-16-5-beta-3-to-developers/",
      urlToImage:
        "https://images.macrumors.com/t/csThwtm9fxZHHpY2ARxh7vfoBdU=/2500x/article-new/2023/03/iOS-16.5-Feature.jpg",
      publishedAt: "2023-04-25T17:20:22Z",
      content:
        "Apple today seeded the third betas of upcoming iOS 16.5 and iPadOS 16.5 updates to developers for testing purposes, with the software coming two weeks after the launch of the second betas.\r\nRegistere… [+612 chars]",
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
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Peter Rothbart,Angela Fung",
      title: "The Best High Limit Credit Cards of April 2023",
      description:
        "High limit credit cards may have a minimum credit limit of $5,000 or no preset spending limit at all. Our picks for the best credit cards with high limits include options for travelers, foodies, and business owners.",
      url: "https://www.businessinsider.com/personal-finance/best-high-limit-credit-cards",
      urlToImage:
        "https://i.insider.com/644730a6101b77001857c2be?width=1200&format=jpeg",
      publishedAt: "2023-04-25T19:53:20Z",
      content:
        "Our experts answer readers' credit card questions and write unbiased product reviews (here's how we assess credit cards). In some cases, we receive a commission from our partners; however, our opinio… [+31596 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Gabriel Erard",
      title: "Lo próximo de Apple sería una IA capaz de detectar tus emociones",
      description:
        "El próximo desafío de Apple sería desarrollar un servicio de salud y bienestar basado en una inteligencia artificial capaz de detectar tus emociones. Así lo afirma el más reciente informe de Mark Gurman, de Bloomberg, quien asegura que esta nueva herramienta …",
      url: "http://hipertextual.com/2023/04/apple-inteligencia-artificial-capaz-detectar-emociones",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2023/04/adrian-swancar-roCfgvkBLVY-unsplash-scaled.jpg",
      publishedAt: "2023-04-25T20:07:38Z",
      content:
        "El próximo desafío de Apple sería desarrollar un servicio de salud y bienestar basado en una inteligencia artificial capaz de detectar tus emociones. Así lo afirma el más reciente informe de Mark Gur… [+3509 chars]",
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
        id: null,
        name: "Xataka.com",
      },
      author: "Albert Sanchis",
      title:
        "Un CEO elogió a un trabajador que vendió a su perro para volver a la oficina. Es el extremo de la guerra por el teletrabajo",
      description:
        "La pandemia cambió por completo el panorama laboral, forzando a los empleados a trabajar desde sus casas. Aquello estableció nuevos hábitos a los que ahora es muy difícil renunciar, y el resultado está siendo que muchos de estos trabajadores remotos se niegan…",
      url: "https://www.xataka.com/magnet/ceo-elogio-a-trabajador-que-vendio-a-su-perro-para-volver-a-oficina-extremo-guerra-teletrabajo",
      urlToImage: "https://i.blogs.es/4803e1/corte-diagonal-1/840_560.jpeg",
      publishedAt: "2023-04-25T17:16:42Z",
      content:
        "La pandemia cambió por completo el panorama laboral, forzando a los empleados a trabajar desde sus casas. Aquello estableció nuevos hábitos a los que ahora es muy difícil renunciar, y el resultado es… [+5217 chars]",
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
        name: "Digital Trends",
      },
      author: "Phil Nickinson",
      title:
        "Spotify still growing, still losing money — and still without a hi-res option",
      description:
        "Spotify HiFi is still nowhere to be found, a quarter of the way through 2023. And while it may still be in the works, one can make an argument that it's not needed.",
      url: "https://www.digitaltrends.com/home-theater/spotify-q1-earnings-hifi/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2023/04/spotify23-5.jpg?resize=1200%2C630&p=1",
      publishedAt: "2023-04-25T17:09:16Z",
      content:
        "Skip to main content\r\nWe’re more than a quarter of the way through 2023. Spotify just announced its first-quarter earnings, with 515 million monthly active users. Some 210 million of them pay for Spo… [+4443 chars]",
    },
    {
      source: {
        id: null,
        name: "Stevejobsarchive.com",
      },
      author: null,
      title: "Make Something Wonderful: Steve Jobs in his own words",
      description:
        "Read Steve Jobs in his own words in this free online book featuring speeches, quotes, emails, and photographs from the Steve Jobs Archive.",
      url: "https://book.stevejobsarchive.com",
      urlToImage: "https://book.stevejobsarchive.com/og-image.jpg",
      publishedAt: "2023-04-25T17:28:36Z",
      content:
        "Emails from Steve to Himself\r\nThis song moves me like few others.\r\nSteve drafted playlists of his favorite songs and why he loved them in 2003, the year the iTunes Music Store debuted.\r\nFrom: Steve J… [+24504 chars]",
    },
    {
      source: {
        id: null,
        name: "Thurrott.com",
      },
      author: null,
      title: "Wait, did Microsoft kill sleep?",
      description:
        "Hello all, I’ve long been a desktop user and builder, but in the past few years I have been looking to replace my desktops with a daily-driver laptop, docked much of the time to a screen, mouse and keyboard. I have had quite a bit of trouble finding the right…",
      url: "https://www.thurrott.com/forums/general-discussion/windows/thread/wait-did-microsoft-kill-sleep",
      urlToImage:
        "https://thurrott.s3.amazonaws.com/2016/07/thurrott-premium-1024x576-1_325x392_acf_cropped.jpg",
      publishedAt: "2023-04-25T17:11:08Z",
      content:
        "Hello all,\r\nI’ve long been a desktop user and builder, but in the past few years I have been looking to replace my desktops with a daily-driver laptop, docked much of the time to a screen, mouse and … [+1837 chars]",
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
        name: "Brixit.nl",
      },
      author: "Martijn Braam",
      title: "NitroKey Disappoints Me",
      description: "A look at NitroKeys latest article",
      url: "https://blog.brixit.nl/nitrokey-dissapoints-me/",
      urlToImage:
        "https://blog.brixit.nl/image/w600//static/files/blog.brixit.nl/1682447679/20230425_0002_01.jpg",
      publishedAt: "2023-04-25T21:11:14Z",
      content:
        'There\'s an article making the rounds from NitroKey named "Smartphones With Popular Qualcomm Chip Secretly Share Private Information With US Chip-Maker".\r\nThis article is a marketing piece for selling… [+4127 chars]',
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
      author: "Chance Miller",
      title:
        "Apple Music Preview app for Windows adds lyrics, media key controls, and more",
      description:
        "Apple is rolling out a set of updates to its Windows apps today, including Apple Music, Apple Devices, and Apple TV. These apps, which are designated as “Preview” apps by Apple, allow Windows users to access Apple Music and Apple TV content and manage their A…",
      url: "https://9to5mac.com/2023/04/25/apple-music-windows-media-keys-lyrics-more/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/Apple-Music-Apple-TV-apps-for-Windows-11-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T16:05:11Z",
      content:
        "Apple is rolling out a set of updates to its Windows apps today, including Apple Music, Apple Devices, and Apple TV. These apps, which are designated as Preview apps by Apple, allow Windows users to … [+2178 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title: "Apple @ Work: The identity problem in K-12 is solved with Clever",
      description:
        "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Businesses to easily and automatically deploy, manage & protect all…",
      url: "https://9to5mac.com/2023/04/25/clever/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/08/Apple-at-Work.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T10:00:00Z",
      content:
        "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Busines… [+515 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Apple rolling out third beta of macOS 13.4, watchOS 9.5, and tvOS 16.5 to developers",
      description:
        "Apple on Tuesday released the third betas of macOS Ventura 13.4, watchOS 9.5, and tvOS 16.5 for developers. The updates come after Apple began testing with the new betas last month. Read on as we detail what’s new in these updates.\n more…\nThe post Apple rolli…",
      url: "https://9to5mac.com/2023/04/25/third-beta-macos-13-4-watchos-9-5-tvos-16-5/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-beta.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T17:16:48Z",
      content:
        "Apple on Tuesday released the third betas of macOS Ventura 13.4, watchOS 9.5, and tvOS 16.5 for developers. The updates come after Apple began testing with the new betas last month. Read on as we det… [+1376 chars]",
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
      author: "Filipe Espósito",
      title:
        "Apple removes original Bitcoin whitepaper from the latest macOS Ventura beta",
      description:
        "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the existence of the file there was just a joke among Apple engine…",
      url: "https://9to5mac.com/2023/04/25/apple-removes-bitcoin-whitepaper-from-macos/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-Bitcoin-whitepaper.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T20:14:19Z",
      content:
        "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the ex… [+1585 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "WHOOP fitness tracker leapfrogs Apple Watch with muscular load tracking",
      description:
        "The majority of smartwatches and fitness trackers on the market offer heart rate tracking to understand your cardiovascular load for workouts. Now WHOOP has launched an update for its that brings a “first-of-its-kind” feature. Going beyond Apple Watch, Google…",
      url: "https://9to5mac.com/2023/04/25/whoop-fitness-tracker-muscular-load-tracking/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/whoop-muscular-load-tracking.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T17:11:39Z",
      content:
        "The majority of smartwatches and fitness trackers on the market offer heart rate tracking to understand your cardiovascular load for workouts. Now WHOOP has launched an update for its health and fitn… [+3041 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Apple releases iOS 16.5 beta 3 to developers with new sports-related features",
      description:
        "Following the release of the third beta of macOS Ventura 13.4, watchOS 9.5, and tvOS 16.5 to developers, Apple on Tuesday also released iOS 16.5 beta 3. The update brings overall improvements and new sports-related features.\n more…\nThe post Apple releases iOS…",
      url: "https://9to5mac.com/2023/04/25/ios-16-5-beta-3-to-developers/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/ios-16.5-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T17:30:55Z",
      content:
        "Following the release of the third beta of macOS Ventura 13.4, watchOS 9.5, and tvOS 16.5 to developers, Apple on Tuesday also released iOS 16.5 beta 3. The update brings overall improvements and new… [+1439 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Bloomberg: Health app coming to iPad this year, AI-powered ‘wellness coaching service’ also in the works",
      description:
        "Apple is expanding its push into health and wellness features as part of iOS 17 and beyond, according to a new report from Bloomberg. With iPadOS 17 this year, the report says Apple will release an iPad version of the Health app for the first time. The Health…",
      url: "https://9to5mac.com/2023/04/25/ipad-health-app-wellness-coaching-more/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/apple-watch-heart-health-studies.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T18:36:36Z",
      content:
        "Apple is expanding its push into health and wellness features as part of iOS 17 and beyond, according to a new report from Bloomberg. With iPadOS 17 this year, the report says Apple will release an i… [+2644 chars]",
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
      author: "Chance Miller",
      title:
        "Report: iOS 17 bringing new Lock Screen features, Apple Music UI updates, more",
      description:
        "We’re beginning to get a clearer picture of what new features could be introduced with iOS 17 this year. A new post on Weibo from a previously accurate source claims iOS 17 will include changes to the iPhone Lock Screen, new features for Apple Music, and more…",
      url: "https://9to5mac.com/2023/04/25/ios-17-features-apple-music-lock-screen-more/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/ios17-02.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T16:58:33Z",
      content:
        "Were beginning to get a clearer picture of what new features could be introduced with iOS 17 this year. A new post on Weibo from a previously accurate source claims iOS 17 will include changes to the… [+1942 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Two ways AirPods Pro can protect your hearing at loud concerts and music festivals",
      description:
        "One of the headlining features of is something Apple calls Adaptive Transparency mode. This feature builds on the Transparency mode feature Apple introduced with the original AirPods Pro, which let outside sound in, so you can hear what’s going on around you.…",
      url: "https://9to5mac.com/2023/04/25/airpods-pro-concerts-hearing-protection/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/11/airpods-pro-2-latency.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T20:34:51Z",
      content:
        "One of the headlining features of AirPods Pro 2 is something Apple calls Adaptive Transparency mode. This feature builds on the Transparency mode feature Apple introduced with the original AirPods Pr… [+3354 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "When will watchOS 10 come out and how could the major update look?",
      description:
        "While iOS 17 and macOS 14 are expected to be more iterative updates, watchOS 10 could bring some major changes to Apple Watch. Let’s look at when to expect the watchOS 10 release date plus what an overhaul of the UI could look like.\n more…\nThe post When will …",
      url: "https://9to5mac.com/2023/04/25/watchos-10-release-date/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/watchos-10-release-date.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T22:43:08Z",
      content:
        "While iOS 17 and macOS 14 are expected to be more iterative updates, watchOS 10 could bring some major changes to Apple Watch. Let’s look at when to expect the watchOS 10 release date plus what an ov… [+3098 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title: "Houzz app adding support for Apple’s Tap to Pay on iPhone",
      description:
        "Apple has been working with multiple partners to expand its Tap to Pay feature, which lets businesses use their iPhones to accept contactless payments. In the US, the popular home renovation platform Houzz has announced support for Apple’s Tap to Pay. This wi…",
      url: "https://9to5mac.com/2023/04/25/houzz-apple-tap-to-pay-iphone/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Houzz-Apple-Tap-to-Pay.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-25T23:36:49Z",
      content:
        "Apple has been working with multiple partners to expand its Tap to Pay feature, which lets businesses use their iPhones to accept contactless payments. In the US, the popular home renovation platform… [+2088 chars]",
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
        name: "Autoblog",
      },
      author: "Joel Stocksdale",
      title:
        "McLaren 750S revealed, adding power and lightness to the old 720S",
      description:
        "Filed under:\n McLaren,Coupe,Performance,Supercars\n Continue reading McLaren 750S revealed, adding power and lightness to the old 720S\nMcLaren 750S revealed, adding power and lightness to the old 720S originally appeared on Autoblog on Tue, 25 Apr 2023 19:01:0…",
      url: "https://www.autoblog.com/2023/04/25/mclaren-750s-reveal-coupe-spider-more-power-lighter-720s/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/04/25142619/McLaren_750S_Coupé-073.jpg.jpg",
      publishedAt: "2023-04-25T23:01:00Z",
      content:
        "The McLaren 720S's successor has been revealed, and ... it looks a lot like the 720S. It's the McLaren 750S, and there's a reason it looks similar, as a lot of it is. The company noted that the 750S … [+3204 chars]",
    },
    {
      source: {
        id: null,
        name: "Dezeen",
      },
      author: "Saudatu Bah",
      title:
        "Dezeen Agenda features Foster + Partners' first Apple Store in India",
      description:
        "The latest edition of our weekly Dezeen Agenda newsletter features Foster + Partners' first flagship Apple Store in India. Subscribe to Dezeen Agenda now. Fosters + Partners has completed India's first Apple store in Mumbai. Informed by \"the creative spirit o…",
      url: "https://www.dezeen.com/2023/04/25/dezeen-agenda-features-foster-partners-first-apple-store-in-india/",
      urlToImage:
        "https://static.dezeen.com/uploads/2023/04/apple-store-mumbai-foster-partners-india_dezeen_2364_hero_12-600x600.jpg",
      publishedAt: "2023-04-25T18:00:32Z",
      content:
        "The latest edition of our weekly Dezeen Agenda newsletter features Foster + Partners' first flagship Apple Store in India. Subscribe to Dezeen Agenda now.\r\nFosters + Partners has completed India's fi… [+1037 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew O'Hara)",
      title: "Our favorite bands for Apple Watch Ultra in spring 2023",
      description:
        "Months after release, there are a lot of bands designed for the Apple Watch Ultra. Here are our favorite bands from Apple and third parties for any situation.Some of the best Apple Watch Ultra bandsBands for the larger Apple Watch sizes will fit the Apple Wat…",
      url: "https://appleinsider.com/inside/apple-watch-ultra/best/our-favorite-bands-for-apple-watch-ultra-in-spring-2023",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54131-109044-Watch-Bands-for-Apple-Watch-Ultra-xl.jpg",
      publishedAt: "2023-04-25T20:27:54Z",
      content:
        "Some of the best Apple Watch Ultra bands\r\nMonths after release, there are a lot of bands designed for the Apple Watch Ultra. Here are our favorite bands from Apple and third parties for any situation… [+7450 chars]",
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
      author: "news@appleinsider.com (Andrew Orr)",
      title:
        "Hollywood writers' strike could lead to difficult times for Apple TV+, but Apple can handle it",
      description:
        "Apple TV could suffer from an impending Hollywood writers' strike due to a small library and lack of unscripted content, but the company can easily weather the storm.Apple TV+Hollywood is preparing for a potential writers' strike that might start on May 1 aft…",
      url: "https://appleinsider.com/articles/23/04/25/hollywood-writers-strike-could-lead-to-difficult-times-for-apple-tv-but-apple-can-handle-it",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54148-109102-Apple-TV-plus-xl.jpg",
      publishedAt: "2023-04-25T17:17:24Z",
      content:
        "Apple TV+\r\nApple TV could suffer from an impending Hollywood writers' strike due to a small library and lack of unscripted content, but the company can easily weather the storm.\r\nHollywood is prepari… [+2307 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title:
        "Apple releases third watchOS 9.5, tvOS 16.5, HomePod betas for developers to download",
      description:
        "Apple has released the third developer betas for tvOS 16.5 and watchOS 9.5, continuing the latest testing round.watchOS 9Developers can install the new updates by going to the Apple Developer Center by updating hardware that is already running the beta operat…",
      url: "https://appleinsider.com/articles/23/04/25/apple-releases-third-watchos-95-tvos-165-homepod-betas-for-developers-to-download",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53784-108179-watchOS-9-xl.jpg",
      publishedAt: "2023-04-25T17:12:08Z",
      content:
        "watchOS 9\r\nApple has released the third developer betas for tvOS 16.5 and watchOS 9.5, continuing the latest testing round.\r\nDevelopers can install the new updates by going to the Apple Developer Cen… [+1360 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title: "Lock screen, Apple Music changes now expected for iOS 17",
      description:
        "Apple will be making more changes to the lock screen in iOS 17, a leaker claims, including showing lyrics for songs playing on Apple Music.The lock screen became more customizable in iOS 16. Apple is anticipated to show off its next operating system update, i…",
      url: "https://appleinsider.com/articles/23/04/25/lock-screen-apple-music-changes-now-expected-for-ios-17",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54149-109101-48800-95331-iOS-16-Lock-Screen-xl-xl.jpg",
      publishedAt: "2023-04-25T17:06:21Z",
      content:
        "The lock screen became more customizable in iOS 16. \r\nApple will be making more changes to the lock screen in iOS 17, a leaker claims, including showing lyrics for songs playing on Apple Music. \r\nApp… [+1532 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title: "Apple seeds third developer beta for macOS Ventura 13.4",
      description:
        "The third beta of macOS Ventura 13.4 for developers has been released by Apple as part of its ongoing beta cycle for hardware.New macOS Ventura betaDevelopers who have registered for the beta program can select the most recent builds by visiting the Apple Dev…",
      url: "https://appleinsider.com/articles/23/04/25/apple-seeds-third-developer-beta-for-macos-ventura-134",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53783-108176-studio-display-01-xl.jpg",
      publishedAt: "2023-04-25T17:07:42Z",
      content:
        "New macOS Ventura beta\r\nThe third beta of macOS Ventura 13.4 for developers has been released by Apple as part of its ongoing beta cycle for hardware.\r\nDevelopers who have registered for the beta pro… [+1326 chars]",
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
      author: "news@appleinsider.com (Andrew Orr)",
      title: "Apple issues third developer beta of iOS 16.5 & iPadOS 16.5",
      description:
        "The iOS and iPadOS 16.5 betas are part of Apple's ongoing testing program for its operating systems, and the third releases are now available.iOS 16.5 developer beta two is outDevelopers can get the most recent releases from the Apple Developer Center by sign…",
      url: "https://appleinsider.com/articles/23/04/25/apple-issues-third-developer-beta-of-ios-165-ipados-165",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53782-108175-iOS-16-logo-xl.jpg",
      publishedAt: "2023-04-25T17:24:13Z",
      content:
        "iOS 16.5 developer beta two is out\r\nThe iOS and iPadOS 16.5 betas are part of Apple's ongoing testing program for its operating systems, and the third releases are now available.\r\nDevelopers can get … [+1024 chars]",
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
      author: "news@appleinsider.com (Andrew Orr)",
      title:
        "Apple plans to expand Health services to include mood & eye tracking, AI coach planned for later",
      description:
        "Apple reportedly plans to release an AI-powered health coach and tools to track a person's mood, and the Health app might finally be available on the iPad.Apple plans to expand health servicesThe company may be planning to increase its efforts into health and…",
      url: "https://appleinsider.com/articles/23/04/25/apple-plans-to-expand-health-services-to-include-mood-eye-tracking-ai-coach-planned-for-later",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54150-109105-apple-health-xl.jpg",
      publishedAt: "2023-04-25T19:33:50Z",
      content:
        "Apple plans to expand health services\r\nApple reportedly plans to release an AI-powered health coach and tools to track a person's mood, and the Health app might finally be available on the iPad.\r\nThe… [+1979 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Wesley Hilliard)",
      title: "Bitcoin whitepaper removed in macOS Ventura 13.4 beta 3",
      description:
        "Apple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.Apple removed the Bitcoin whitepaperThere are numerous Easter eggs and hidden files in macOS that won't appear without some kind of spe…",
      url: "https://appleinsider.com/articles/23/04/25/bitcoin-whitepaper-removed-in-macos-ventura-134-beta-3",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/54152-109106-53841-108287-bitcoin-o-xl.jpg",
      publishedAt: "2023-04-25T20:44:25Z",
      content:
        "Apple removed the Bitcoin whitepaper\r\nApple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.\r\nThere are numerous Easter eggs and … [+1376 chars]",
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
        "A la espera de que Ring lance en España ese dron vigilante que es capaz de volar sobre los interiores de nuestro hogar, nos quedamos hoy con el lanzamiento del DJI Mavic 3 Pro, un dron que tiene el g… [+3842 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Manuel Ramírez",
      title:
        "Samsung lleva a la serie Galaxy A una función mágica de los Galaxy S23: crea stickers en segundos",
      description:
        "Samsung quiere impulsar la edición de fotos en su gama media con la serie Galaxy A para que ésta reciba una función que ha sido exclusiva de los Galaxy S23. Crear stickers de tus fotos va a ser bien fácil.",
      url: "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230425/samsung-galaxy-funcion-magica-s23-stickers-segundos/758924548_0.html",
      urlToImage:
        "https://s1.eestatic.com/2023/04/25/elandroidelibre/noticias-y-novedades/758934932_232692265_1200x630.jpg",
      publishedAt: "2023-04-25T19:11:00Z",
      content:
        "Si ya ha hecho Samsung disponible Galaxy Enhance-X para los Galaxy S23, ahora quiere impulsar la edición de fotografías para que seas capaz de recortar sujetos de las mismas y así crear stickers o si… [+2154 chars]",
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
      author: "Jessica Rendall",
      title: "An AI Health Coach? Apple Could Be Working on It - CNET",
      description:
        "The AI service would motivate users to exercise, eat well and improve their sleep, says a report.",
      url: "https://www.cnet.com/health/mental/an-ai-health-coach-apple-could-be-working-on-it/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/c3e901cf33b6ace8d1e909604796189b27a87419/hub/2023/04/25/24906f59-9de8-4dd1-8ee7-82ce372523dd/gettyimages-1360358389.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-04-25T22:09:40Z",
      content:
        "Apple is strengthening its already firm footing in the health and wellness space with a motivational coaching service that'll use artificial intelligence to improve your exercise, diet and sleep, acc… [+1878 chars]",
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
        name: "Yanko Design",
      },
      author: "Sarang Sheth",
      title:
        "Connect your AirPods or Bluetooth headset to any device with a 3.5mm audio jack using this wireless dongle",
      description:
        "Connect your AirPods or Bluetooth headset to any device with a 3.5mm audio jack using this wireless dongleEver wanted to use your AirPods with the old-gen iPod or MP3 player? Or wanted to connect your new TWS earphones to the in-flight entertainment...",
      url: "https://www.yankodesign.com/2023/04/25/connect-your-airpods-or-bluetooth-headset-to-any-device-with-a-3-5mm-audio-jack-using-this-wireless-dongle/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2023/04/auto-draft/twelve_south_airfly_bluetooth_dongle_1.jpg",
      publishedAt: "2023-04-25T22:30:45Z",
      content:
        "Ever wanted to use your AirPods with the old-gen iPod or MP3 player? Or wanted to connect your new TWS earphones to the in-flight entertainment system in a plane? Or wanted to use your hi-fi wireless… [+3235 chars]",
    },

    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Paul Sawers",
      title:
        "Spotify passes 500M users, but its premium-to-free ratio is falling",
      description:
        "Spotify now has 515 million monthly users, representing a 5% increase on the previous quarter and 22% increase on last year.",
      url: "https://techcrunch.com/2023/04/25/spotify-now-has-more-than-500m-users/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/07/Spotify-e1659011282211.jpg?resize=1200,675",
      publishedAt: "2023-04-25T11:48:29Z",
      content:
        "Spotify now has 515 million monthly active users (MAUs), representing a 5% increase on the previous quarter and 22% increase on the corresponding period last year.\r\nThis is the first time Spotify has… [+1604 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Ivan Mehta",
      title: "Twitter will now show labels on tweets with reduced visiblity",
      description:
        "Twitter said today that it will add labels to tweets for which the company reduces visibility. These labels will be visible to authors too.",
      url: "https://techcrunch.com/2023/04/25/twitter-will-now-show-labels-on-tweets-with-reduced-visiblity/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/04/twitter-settings.jpg?resize=1200,645",
      publishedAt: "2023-04-25T11:23:19Z",
      content:
        "Twitter said today that it will add labels to tweets that have been flagged by the company to reduce their visibility. Elon Musk &amp; Co. touted this as a “freedom of speech, not reach” move.\r\nLast … [+2109 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Manish Singh",
      title: "India warns e-commerce giants, urges adoption of open network",
      description:
        "India will use the “full force of the government” to promote the adoption of its open e-commerce network, commerce minister Piyush Goyal said.",
      url: "https://techcrunch.com/2023/04/25/india-warns-e-commerce-giants-urges-adoption-of-open-network/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1096026706.jpg?resize=1200,843",
      publishedAt: "2023-04-25T11:09:18Z",
      content:
        "India will use the full force of the government to promote the adoption of its open e-commerce network, cautioning e-commerce giants failing to join the initiative within the stipulated time frame ma… [+2077 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Natasha Lomas",
      title:
        "UK to press ahead with long anticipated reform to tackle Big Tech's market power",
      description:
        "The UK has signalled it will press ahead with an ex ante competition reform aimed at addressing the market muscle of Big Tech.",
      url: "https://techcrunch.com/2023/04/25/uk-big-tech-competition-reform/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1031626648.jpg?resize=1200,799",
      publishedAt: "2023-04-25T08:30:35Z",
      content:
        "The UK has signalled it will press ahead with an ex ante competition reform aimed at addressing the market muscle of Big Tech.\r\nThe legislation will also aim to strengthen consumer rights by targetin… [+7380 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Ivan Mehta",
      title: "Opera launches Opera One browser with a new tab grouping concept",
      description:
        "Opera has launched a new browser called Opera One, which will eventually replace its flagship browser later this year.",
      url: "https://techcrunch.com/2023/04/24/opera-launches-opera-one-browser-with-a-new-tab-grouping-concept/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/04/TechCrunch-Graphic-03.jpg?resize=1200,675",
      publishedAt: "2023-04-25T06:59:10Z",
      content:
        "Opera has launched a new browser called Opera One, which will eventually replace its flagship browser. The Norway-based company said that this new browser has elements that will make it ready for a “… [+1762 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Stefanie Waldek",
      title:
        "With $20M in new funding, Hydrosat preps climate-monitoring satellites for launch",
      description:
        "Data is becoming as precious as water in precision agriculture, and Hydrosat aims to help provide both with a new set of Earth observation satellites. The company has raised a $20M A round, including $5 million in non-dilutive funding, which should put the fi…",
      url: "https://techcrunch.com/2023/04/25/with-20m-in-new-funding-hydrosat-preps-climate-monitoring-satellites-for-launch/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/11/Hydrosats-VanZyl-1-Mission-on-Loft-Orbital-YAM-7.png?resize=1200,764",
      publishedAt: "2023-04-25T05:30:51Z",
      content:
        "Data is becoming as precious as water in precision agriculture, and Hydrosat aims to help provide both with a new set of Earth observation satellites. The company has raised a $20M A round, including… [+2394 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Lauren Forristal",
      title:
        "Klarna’s latest update introduces a personal shopping assistant and new creator tools",
      description:
        "Klarna announced new features, including a personal shopper, a customized storefront for creators, an AI-powered shopping feed and more.",
      url: "https://techcrunch.com/2023/04/25/klarnas-latest-update-introduces-a-personal-shopping-assistant-and-new-creator-tools/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/04/Spotlight_PR_Hero_BG_US.png?resize=1200,675",
      publishedAt: "2023-04-25T01:17:59Z",
      content:
        "Klarna, the payments and shopping platform, announced today new features and updates that aim to give users a more personalized shopping experience.\r\nThis includes Ask Klarna, a personal shopping ass… [+6926 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Tim De Chant",
      title:
        "How much does your company pollute? CarbonChain gets $10M Series A to help answer that.",
      description:
        "Hardly any companies comprehensively track their emissions, but new government regulations will require it.",
      url: "https://techcrunch.com/2023/04/25/carbonchain-series-a-climate-disclosure/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1330170415.jpg?resize=1200,674",
      publishedAt: "2023-04-24T20:28:33Z",
      content:
        "Everything you buy and every service you pay for pollutes. In the case of a coffee, it might be a little. In the case of a Chevy Suburban or a flight to Durban, it might be a lot.\r\nExactly how much, … [+1612 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Aria Alamalhodaei",
      title: "Watch ispace attempt to land on the moon for the first time",
      description:
        "Watch Japanese company ispace attempt to land its Hakuto-R lander on the moon for the first time in a historic mission.",
      url: "https://techcrunch.com/2023/04/25/watch-ispace-attempt-to-land-on-the-moon-for-the-first-time/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/08/HAKUTO-R_nologo.jpg?resize=1200,848",
      publishedAt: "2023-04-24T18:15:31Z",
      content:
        "After five long months journeying through space, ispaces Hakuto-R lander is ready to greet the lunar surface.\r\nThe Japanese company is expecting to land Hakuto-R at 12:40 PM EST today. If successful,… [+1291 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Paul Sawers",
      title: "European stock trading app Lightyear arrives on the web",
      description:
        "European stock-trading startup Lightyear is expanding to the web, nearly two years after the company first emerged out of stealth.",
      url: "https://techcrunch.com/2023/04/24/european-stock-trading-app-lightyear-arrives-on-the-web/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/04/Feat.png?resize=1200,800",
      publishedAt: "2023-04-20T13:43:24Z",
      content:
        "U.K.-based stock-trading startup Lightyear is finally expanding to the web, nearly two years after the company first emerged out of stealth.\r\nFounded out of London in 2020, Lightyear is one of a numb… [+2421 chars]",
    },

    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Soma Biswas",
      title: "Bed Bath & Beyond Took Out Emergency Loan on Eve of Bankruptcy",
      description:
        "The retailer borrowed $54 million on Friday to make payroll, showing its finances were unusually dire even for a company facing chapter 11",
      url: "https://www.wsj.com/articles/bed-bath-beyond-took-out-emergency-loan-on-eve-of-bankruptcy-6b406773",
      urlToImage: "https://images.wsj.net/im-769318/social",
      publishedAt: "2023-04-24T22:36:00Z",
      content:
        "Bed Bath &amp; Beyond Inc. faced a much worse financial situation ahead of its bankruptcy filing than is typical for companies facing an imminent chapter 11.\r\nThe home-goods retailer sought a $54 mil… [+691 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "On Island South of Taiwan, U.S. Prepares for Conflict With China...",
      description:
        "Part of largest-ever annual drills with the Philippines focuses on defending strategic Bashi Channel",
      url: "https://www.wsj.com/articles/on-basco-island-south-of-taiwan-u-s-military-prepares-for-conflict-with-china-f7c5c8bc",
      urlToImage: "https://images.wsj.net/im-768786/social",
      publishedAt: "2023-04-24T15:00:04Z",
      content:
        "On Basco Island South of Taiwan, U.S. Military Prepares for Conflict With ChinaPhoto: Ted Aljibe/Agence France-Presse/Getty ImagesBASCO, Philippines—On a rocky, windswept island just over 100 miles s… [+1127 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "The Grim Life and Brutal Death of a Wagner Recruit...",
      description:
        "A Russian prisoner struck a deal to fight for six months in Ukraine in exchange for his freedom, one of many who hoped to collect his due",
      url: "https://www.wsj.com/articles/grim-life-and-brutal-death-of-a-wagner-recruit-40d9473a",
      urlToImage: "https://images.wsj.net/im-768860/social",
      publishedAt: "2023-04-24T15:00:04Z",
      content:
        "The Grim Life and Brutal Death of a Wagner RecruitBARVINKOVE, Ukraine—Yevgeny Nuzhin, an ex-cop and convicted killer, had carved out as good a life as a penniless inmate could expect inside a high-se… [+920 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "There Were 1,269 Efforts to Ban Books in '22. These Were Most Targeted...",
      description:
        "Efforts to censor books and other resources in libraries nearly doubled in 2022, according to the American Library Association",
      url: "https://www.wsj.com/articles/there-were-1-269-efforts-to-ban-books-in-2022-these-were-the-most-targeted-e19f3f33",
      urlToImage: "https://images.wsj.net/im-768181/social",
      publishedAt: "2023-04-24T14:00:04Z",
      content:
        "There Were 1,269 Efforts to Ban Books in 2022. These Were the Most Targeted.\r\nA graphic-novel memoir about gender identity. A collection of personal essays by a queer Black activist. Toni Morrison’s … [+857 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Surprising Surge of Faith Among Young People...",
      description:
        "Young adults, theologians and church leaders say the increase is a response to the pandemic",
      url: "https://www.wsj.com/articles/the-surprising-surge-of-faith-among-young-people-424220bd",
      urlToImage: "https://images.wsj.net/im-762356/social",
      publishedAt: "2023-04-23T14:00:04Z",
      content:
        "The Surprising Surge of Faith Among Young PeopleA greater share of young adults say they believe in a higher power or God.About one-third of 18-to-25-year-olds say they believe—more than doubt—the ex… [+933 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Charles Barkley, Gayle King New CNN Show Won't Be Political, Hosts Say...",
      description:
        "Mr. Barkley, an NBA commentator, said while the prime-time show won’t have a partisan stance, it will tackle current issues like gun violence",
      url: "https://www.wsj.com/articles/cnn-announces-new-primetime-show-featuring-gayle-king-and-charles-barkley-5294346",
      urlToImage: "https://images.wsj.net/im-768476/social",
      publishedAt: "2023-04-23T11:00:04Z",
      content:
        "Charles Barkley and Gayle King’s New CNN Show Won’t Be Political, Hosts Say\r\n“CBS Mornings” anchor Gayle King and former National Basketball Association star Charles Barkley will host a weekly prime-… [+1031 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Happiest People in America. Called Them to Ask Why...",
      description:
        "Only 12% of respondents in a recent WSJ poll said they were ‘very happy.’ We called to ask what makes them different.",
      url: "https://www.wsj.com/articles/happiest-people-america-poll-ef7c854c",
      urlToImage: "https://images.wsj.net/im-764995/social",
      publishedAt: "2023-04-22T15:00:04Z",
      content:
        "They’re the Happiest People in America. We Called Them to Ask Why.America’s happiest people have a few traits in common: They value community and close personal relationships. They tend to believe in… [+879 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Americans Escaping Pricey Cities Bring Higher Housing Costs, Inflation With Them...",
      description:
        "Inflation in some warm-weather metro areas is more than 2 percentage points higher than national rate",
      url: "https://www.wsj.com/articles/americans-escaping-pricey-cities-bring-higher-housing-costs-inflation-with-them-a3118424",
      urlToImage: "https://images.wsj.net/im-767882/social",
      publishedAt: "2023-04-22T14:00:04Z",
      content:
        "Americans Escaping Pricey Cities Bring Higher Housing Costs, Inflation With Them\r\nTampa, Fla., residents face some of the hottest inflation in the country, but when excluding sizzling housing costs, … [+1157 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Europe Air-Traffic Agency Under Attack From Hackers...",
      description:
        "Air traffic isn’t at risk but the attack is ongoing, Eurocontrol said, amid fears about the safety of Europe’s critical infrastructure",
      url: "https://www.wsj.com/articles/europes-air-traffic-agency-under-attack-from-pro-russian-hackers-54b4514d",
      urlToImage: "https://images.wsj.net/im-767329/social",
      publishedAt: "2023-04-20T18:00:06Z",
      content:
        "WSJ News Exclusive | Europe’s Air-Traffic Agency Under Attack From Pro-Russian Hackers\r\nEurope’s air-traffic control agency said Thursday that it was under attack from pro-Russian hackers amid fears … [+1042 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Record Number of Journalists Detained Worldwide Prior to Gershkovich Arrest...",
      description:
        "‘It’s gotten worse everywhere,’ the Committee to Protect Journalists says about press freedom",
      url: "https://www.wsj.com/articles/a-record-number-of-journalists-were-detained-worldwide-prior-to-evan-gershkovichs-arrest-cae34b14",
      urlToImage: "https://images.wsj.net/im-765765/social",
      publishedAt: "2023-04-20T13:00:04Z",
      content:
        "A Record Number of Journalists Were Detained Worldwide Prior to Evan Gershkovich’s ArrestA record number of journalists were imprisoned in 2022, a sign of weakening press freedom worldwide, according… [+1070 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Soma Biswas, Alexander Gladstone",
      title: "Bed Bath & Beyond Preparing for Bankruptcy Filing Within Days",
      description:
        "The struggling retailer again is preparing to file for chapter 11 after its latest fundraising strategy fell short of its needs, people familiar with the matter say",
      url: "https://www.wsj.com/articles/bed-bath-beyond-preparing-for-bankruptcy-filing-within-days-7d5840a7",
      urlToImage: "https://images.wsj.net/im-766556/social",
      publishedAt: "2023-04-19T21:36:00Z",
      content:
        "Bed Bath &amp; Beyond Inc. is preparing a bankruptcy filing for as early as this weekend as its falling stock price makes it near impossible to raise enough capital to avert default, according to peo… [+438 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Katherine Clarke",
      title:
        "Inside Texas Socialite's Party Palace, Where She Entertained Tom Brady and H.W. Bush...",
      description:
        "Inside Texas Socialite's Party Palace, Where She Entertained Tom Brady and H.W. Bush...\r\n\n \n \n \n (First column, 10th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
      url: "https://www.wsj.com/articles/river-oaks-houston-home-auction-bec8323b",
      urlToImage: "https://images.wsj.net/im-765624/social",
      publishedAt: "2023-04-19T12:22:38Z",
      content:
        "When they say opposites attract, they might well be talking about wealthy Texas couple John Thrash and his wife, Becca Cason Thrash. While Mr. Thrash, a green energy entrepreneur and architecture won… [+721 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Russian Court Upholds WSJ Reporter's Detention...",
      description:
        "Journalist to remain in pretrial detention at Moscow’s Lefortovo prison",
      url: "https://www.wsj.com/articles/moscow-court-to-hear-appeal-on-detention-of-jailed-wsj-reporter-evan-gershkovich-9c464c6c",
      urlToImage: "https://images.wsj.net/im-765259/social",
      publishedAt: "2023-04-18T12:00:04Z",
      content:
        "Russian Court Upholds WSJ Reporter Evan Gershkovich’s Detention\r\nPhoto: Maxim Shipenkov/ShutterstockA Moscow court upheld the detention of Wall Street Journal reporter Evan Gershkovich at the prison … [+1037 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Putin Makes Rare Trip to Russian-Occupied Areas of Ukraine...",
      description:
        "Visit near the front lines comes as Kyiv gears up for offensive to drive back Moscow’s forces",
      url: "https://www.wsj.com/articles/putin-makes-rare-trip-to-russian-occupied-areas-of-ukraine-e178d5c5",
      urlToImage: "https://images.wsj.net/im-765218/social",
      publishedAt: "2023-04-18T11:00:04Z",
      content:
        "Putin Makes Rare Trip to Russian-Occupied Areas of UkraineRussian President Vladimir Putin has made a rare visit near the front lines of the war he began in Ukraine, meeting with military commanders … [+1045 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "What Do Americans Want in European Vacation? Fewer Americans...",
      description:
        "As the hottest spots get overrun with U.S. tourists, some visitors plan vacations to new countries and regions",
      url: "https://www.wsj.com/articles/europe-travel-summer-vacation-reservations-aa6b6bc6",
      urlToImage: "https://images.wsj.net/im-763383/social",
      publishedAt: "2023-04-17T15:00:04Z",
      content:
        "What Do Americans Want in a European Vacation? Fewer AmericansFor some U.S. travelers, this summer’s hottest European destination is one without other Americans.American tourists mobbed Europe last y… [+1004 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Determined to Flee China, Thousands Take Route to Southern U.S. Border...",
      description:
        "In search of economic opportunity or political freedom, Chinese contend with smugglers, bandits and treacherous jungle on trek through Latin America",
      url: "https://www.wsj.com/articles/determined-to-flee-china-thousands-take-a-long-dangerous-route-to-the-southern-u-s-border-73acfbe9",
      urlToImage: "https://images.wsj.net/im-763644/social",
      publishedAt: "2023-04-16T13:00:04Z",
      content:
        "Determined to Flee China, Thousands Take a Long, Dangerous Route to the Southern U.S. BorderOn a crowded speedboat making a night crossing in rough waters off Colombia in January, Daniel Huang, a for… [+1098 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "As Tiny Island Is Militarized, India Worries About Beijing's Growing Footprint...",
      description:
        "Satellite images track a decade of construction on Myanmar’s strategically located Great Coco Island",
      url: "https://www.wsj.com/articles/as-a-tiny-island-is-militarized-india-worries-about-chinas-growing-footprint-7e2c7f0e",
      urlToImage: "https://images.wsj.net/im-763505/social",
      publishedAt: "2023-04-15T14:00:04Z",
      content:
        "As a Tiny Island Is Militarized, India Worries About China’s Growing FootprintIndia is monitoring a strategically located island in the Bay of Bengal over concerns China could be involved in a buildu… [+1224 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "BOOM: New Home Crowned Priciest Property to Ever Sell in Paradise Valley...",
      description:
        "An estate built for a car collector has sold for a record $23.5 million",
      url: "https://www.wsj.com/articles/a-new-home-is-crowned-priciest-property-to-ever-sell-in-paradise-valley-d67408ed",
      urlToImage: "https://images.wsj.net/im-764235/social",
      publishedAt: "2023-04-15T14:00:04Z",
      content:
        "WSJ News Exclusive | A New Home Is Crowned Priciest Property to Ever Sell in Paradise ValleyBe the first to know about the biggest and best luxury home sales and listings by signing up for our Mansio… [+950 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Economists Turn More Pessimistic on Inflation...",
      description:
        "Persistent inflation will keep interest rates elevated and recession risks high, Journal survey finds",
      url: "https://www.wsj.com/articles/economists-turn-more-pessimistic-on-inflation-ed2fd667",
      urlToImage: "https://images.wsj.net/im-763745/social",
      publishedAt: "2023-04-15T14:00:04Z",
      content:
        "WSJ News Exclusive | Economists Turn More Pessimistic on Inflation\r\nThe March CPI came in below expectations at 5% year-over-year, but the core CPI, which economists view as a better predictor of fut… [+1276 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "China's Xi, Brazil's Lula Take United Stance Against USA...",
      description:
        "Brazilian president says the two countries will work to ‘balance world geopolitics’",
      url: "https://www.wsj.com/articles/chinas-xi-jinping-brazils-lula-take-united-stance-against-u-s-e8e55c1c",
      urlToImage: "https://images.wsj.net/im-763608/social",
      publishedAt: "2023-04-14T15:00:05Z",
      content:
        "China’s Xi Jinping, Brazil’s Lula Take United Stance Against U.S.\r\nPhoto: POOL/REUTERSHONG KONG—Chinese leader Xi Jinping and Brazilian President Luiz Inácio Lula da Silva struck a unified pose in de… [+966 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "The Veteran Lawyers Who Will Lead Prosecution of The Don...",
      description:
        "Team aiding Alvin Bragg has experience both as prosecutors and in private practice",
      url: "https://www.wsj.com/articles/the-veteran-lawyers-who-will-lead-the-prosecution-of-donald-trump-26e214ab",
      urlToImage: "https://images.wsj.net/im-762434/social",
      publishedAt: "2023-04-14T14:00:04Z",
      content:
        "The Veteran Lawyers Who Will Lead the Prosecution of Donald Trump\r\nIllustration: Ryan TrefesThe team prosecuting Donald Trump in Manhattan is a mix of young lawyers and veterans, career officials and… [+1263 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "HOW DID HE ACCESS DOCS?",
      description:
        "Jack Teixeira, a 21-year-old Massachusetts Air National Guardsman, arrested in connection with leak",
      url: "https://www.wsj.com/articles/pentagon-looking-into-how-accused-leaker-accessed-top-secret-documents-6c6b0972",
      urlToImage: "https://images.wsj.net/im-763487/social",
      publishedAt: "2023-04-14T11:00:04Z",
      content:
        "Pentagon Looking Into How Accused Leaker Accessed Top Secret Documents\r\nPhoto: WCVB/Associated PressWASHINGTON—Among the most puzzling questions to emerge since the arrest of a young Massachusetts ma… [+1534 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Primary Breadwinner Disappearing From More Homes...",
      description:
        "The economics of marriage are changing, but women still take on more of the unpaid labor",
      url: "https://www.wsj.com/articles/more-married-couples-earn-equal-pay-few-do-equal-housework-dda54c66",
      urlToImage: "https://images.wsj.net/im-762181/social",
      publishedAt: "2023-04-13T20:00:06Z",
      content:
        "The Primary Breadwinner Is Disappearing From More Homes\r\nNearly a third of marriages today have no primary breadwinner, as women continue to make strides toward greater equality at work and home.Abou… [+946 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "FEDS NAB 'LEAKER'",
      description:
        "Twenty-one-year-old Jack Teixeira of Massachusetts taken into custody",
      url: "https://www.wsj.com/articles/leak-documents-likely-came-from-air-national-guardsman-at-fort-bragg-official-says-dbf48c0a",
      urlToImage: "https://images.wsj.net/im-763163/social",
      publishedAt: "2023-04-13T19:00:04Z",
      content:
        "Air Guardsman Arrested in Connection With Leaked Documents\r\nPhoto: Andrew Caballero-Reynolds/AFP via Getty ImagesJack Teixeira, a 21-year-old Massachusetts Air National Guardsman, has been arrested i… [+890 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Jodi Xu Klein",
      title: "Bankrupt Drugmaker Sorrento’s Scilex Unit Explores Stock Sale",
      description:
        "Shares in Scilex, Sorrento’s biggest asset, have soared in recent weeks as the parent company charts an exit from chapter 11",
      url: "https://www.wsj.com/articles/bankrupt-drugmaker-sorrentos-scilex-unit-explores-stock-sale-b339d1c",
      urlToImage: "https://images.wsj.net/im-762939/social",
      publishedAt: "2023-04-13T16:25:00Z",
      content:
        "Bankrupt drugmaker Sorrento Therapeutics Inc.s subsidiary Scilex Holding Co. is exploring a sale of new stock to take advantage of a share-price rally as Sorrento charts a path out of chapter 11, acc… [+285 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Soma Biswas, Jodi Xu Klein",
      title:
        "Tupperware Working With Turnaround Advisers Ahead of Possible Bankruptcy",
      description:
        "The household storage brand brings on Alvarez & Marsal along with investment bank Moelis and law firm Kirkland & Ellis",
      url: "https://www.wsj.com/articles/tupperware-working-with-turnaround-advisors-ahead-of-possible-bankruptcy-e054dae6",
      urlToImage: "https://images.wsj.net/im-762959/social",
      publishedAt: "2023-04-13T16:13:00Z",
      content:
        "Tupperware Brands Corp., the household storage brand, has brought on advisers from Moelis &amp; Co., Kirkland &amp; Ellis LLP and Alvarez &amp; Marsal while warning of a possible bankruptcy, accordin… [+279 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Peak Real Estate: This Tiny Wyoming Community Has Some of Country's Priciest Homes...",
      description:
        "Despite Wilson’s small population, properties command hefty price tags",
      url: "https://www.wsj.com/articles/wilson-wyoming-mountain-real-estate-e26d82d3",
      urlToImage: "https://images.wsj.net/im-760658/social",
      publishedAt: "2023-04-13T13:00:04Z",
      content:
        "Peak Real Estate: This Tiny Wyoming Community Has Some of the Country’s Priciest Mountain HomesIn northwest Wyoming, in Teton County, is Jackson Hole, a valley located between the Gros Ventre and Tet… [+1415 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Top Hostage Envoy Pledges to Secure Gershkovich's Release From Russian Prison...",
      description:
        "Roger Carstens also said there is a ‘significant offer on the table’ for detained American Paul Whelan",
      url: "https://www.wsj.com/articles/americas-top-hostage-envoy-pledges-to-secure-evan-gershkovichs-release-from-russian-prison-f5c1958e",
      urlToImage: "https://images.wsj.net/im-762054/social",
      publishedAt: "2023-04-13T13:00:04Z",
      content:
        "America’s Top Hostage Envoy Pledges to Secure Evan Gershkovich’s Release From Russian Prison\r\nIllustration: Todd JohnsonThe U.S.’s top hostage negotiator called on Russia to allow American Embassy of… [+882 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Trump to Be Deposed by New York Attorney General...",
      description:
        "Letitia James’s office is taking the former president’s testimony in its civil-fraud lawsuit",
      url: "https://www.wsj.com/articles/donald-trump-to-be-deposed-by-new-york-attorney-general-444dede7",
      urlToImage: "https://images.wsj.net/im-762417/social",
      publishedAt: "2023-04-13T13:00:04Z",
      content:
        "Donald Trump to Be Deposed by New York Attorney General\r\nIllustration: Ryan TrefesDonald Trump is set to answer questions under oath Thursday from lawyers for New York Attorney General Letitia James,… [+787 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "LVMH's Paris Headquarters Stormed by Protesters...",
      description:
        "Demonstrations against Macron’s pension overhaul spill over into other facets of France’s establishment",
      url: "https://www.wsj.com/articles/lvmh-headquarters-stormed-by-protesters-amid-demonstration-against-macrons-pension-overhaul-1ffd751d",
      urlToImage: "https://images.wsj.net/im-762740/social",
      publishedAt: "2023-04-13T13:00:04Z",
      content:
        "LVMH’s Paris Headquarters Stormed by Protesters\r\nYoan Valat/ShutterstockPARIS—Protesters stormed the headquarters of luxury conglomerate LVMH Moët Hennessy Louis Vuitton SE on Thursday as the nationw… [+828 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Ticks Bringing Disease to Backyard Near You...Bites, infections increasing...",
      description:
        "Bites, infections are increasing as temperatures warm and deer populations grow",
      url: "https://www.wsj.com/articles/tick-season-diseases-lyme-backyards-39599226",
      urlToImage: "https://images.wsj.net/im-757937/social",
      publishedAt: "2023-04-12T15:00:04Z",
      content:
        "Ticks Are Bringing Disease to a Backyard Near YouPeople won’t stop mailing ticks to Griffin Dill. Copyright ©2023 Dow Jones & Company, Inc. All Rights Reserved. 87990cbe856818d5eddac44c7b1cdeb8Contin… [+563 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Inside Most Expensive Trailer Park, Where Mobile Homes Sell for Millions...",
      description:
        "Once a tight-knit community of blue-collar locals, Paradise Cove Mobile Home Park has transformed into a hotspot for celebrities and other wealthy buyers looking for a slice of Malibu",
      url: "https://www.wsj.com/articles/the-most-expensive-trailer-park-in-america-3199a923",
      urlToImage: "https://images.wsj.net/im-759946/social",
      publishedAt: "2023-04-12T12:00:04Z",
      content:
        "Inside America’s Most Expensive Trailer Park, Where Mobile Homes Sell for Millions“Welcome to my living room,” said actress Sarah Paulson as she led a tour for a magazine’s video crew producing a pie… [+715 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "People Sick and Tired of All Their Subscriptions...",
      description:
        "Consumers are rethinking their relationship to subscriptions—and so are companies",
      url: "https://www.wsj.com/articles/people-are-sick-and-tired-of-all-their-subscriptions-cbee7e03",
      urlToImage: "https://images.wsj.net/im-760656/social",
      publishedAt: "2023-04-12T12:00:04Z",
      content:
        "People Are Sick and Tired of All Their Subscriptions\r\nWe’re finally reckoning with our expensive subscription habits.Copyright ©2023 Dow Jones & Company, Inc. All Rights Reserved. 87990cbe856818d5edd… [+575 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Alexander Gladstone",
      title: "Bed Bath & Beyond’s Stock-Sale Deluge Lures Retail Investors",
      description:
        "The distressed home-goods chain has been flooding the market with new shares that it says will likely be worthless if it files for bankruptcy",
      url: "https://www.wsj.com/articles/bed-bath-beyonds-stock-sale-deluge-lures-retail-investors-bb9db1c5",
      urlToImage: "https://images.wsj.net/im-761691/social",
      publishedAt: "2023-04-11T19:36:00Z",
      content:
        "Kais Maleej, a 49-year-old Uber driver and amateur investor active on social media, is a proponent of the theory on Reddit forums that distressed retailer Bed Bath &amp; Beyond Inc. will soon be acqu… [+362 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Followers Describe Allure of Chinese Businessman Charged With $1 Billion Fraud...",
      description:
        "Guo Wengui has pleaded not guilty to accusations that he took money from thousands to fund a lavish lifestyle",
      url: "https://www.wsj.com/articles/followers-describe-allure-of-chinese-businessman-charged-with-fraud-dcef4f0e",
      urlToImage: "https://images.wsj.net/im-760389/social",
      publishedAt: "2023-04-11T15:00:04Z",
      content:
        "Followers Describe Allure of Chinese Businessman Charged With $1 Billion Fraud\r\nSINGAPORE—It wasn’t easy for Liu Jun to give money to an exiled Chinese businessman who had amassed hundreds of thousan… [+771 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "The New Gardening Status Symbol: Upscale Compost...",
      description:
        "‘Compost has become a staple of cocktail-party conversations.’ You can get manure from eucalyptus-eating goats and even a blend from Princess Diana’s childhood home",
      url: "https://www.wsj.com/articles/garden-compost-fertilizer-organic-6b8a977b",
      urlToImage: "https://images.wsj.net/im-734512/social",
      publishedAt: "2023-04-10T15:00:04Z",
      content:
        "The New Gardening Status Symbol: Upscale CompostMiranda Michaelis, a 56-year-old flower farmer in Oxfordshire, England, says she grows some of the healthiest tulips around. Her secret is simple, she … [+1070 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Yuliya Chernova",
      title:
        "Laid-Off Tech Workers Launch ‘Revenge Startups’ Just as Money Dries Up",
      description:
        "New entrepreneurs are on the hunt for venture capital as investors are pulling back",
      url: "https://www.wsj.com/articles/laid-off-tech-workers-launch-revenge-startups-but-money-is-drying-up-6075941",
      urlToImage: "https://images.wsj.net/im-759838/social",
      publishedAt: "2023-04-10T15:00:00Z",
      content:
        "Venture-capital investors, as recently as last year, used to seek out founders who were quitting their tech jobs to launch their own businesses. Now that mass layoffs are pushing many people down the… [+223 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Beyond Asthma: Designing Inhaled Drugs to Fight More Diseases...",
      description:
        "Vaccines, chemotherapy are among medicines that could  be delivered through the lungs; ‘We’re pushing the boundaries of delivery’",
      url: "https://www.wsj.com/articles/beyond-asthma-designing-inhaled-drugs-to-fight-more-diseases-5cacea4f",
      urlToImage: "https://images.wsj.net/im-757216/social",
      publishedAt: "2023-04-09T14:00:04Z",
      content:
        "Beyond Asthma: Designing Inhaled Drugs to Fight More DiseasesTreatments for asthma have long been delivered through the airways. Now researchers are developing inhalable therapies to target a wider r… [+1097 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Schumer, McConnell Call for Russia to Release WSJ Reporter...",
      description:
        "In joint statement, U.S. Senate leaders ‘strongly condemn the wrongful detention’ of jailed WSJ reporter",
      url: "https://www.wsj.com/articles/schumer-mcconnell-call-for-russia-to-release-evan-gershkovich-f4afc63b",
      urlToImage: "https://images.wsj.net/im-759382/social",
      publishedAt: "2023-04-07T13:00:04Z",
      content:
        "WSJ News Exclusive | Schumer, McConnell Call for Russia to Release Evan Gershkovich\r\nPhoto: The Wall Street JournalWASHINGTON—The Senate’s Democratic and Republican leaders called for Russia to free … [+1168 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Berber Jin, Keach Hagey, Clara Mokri",
      title: "ChatGPT生みの親、アルトマン氏が抱える矛盾",
      description:
        "News Corp is a global, diversified media and information services company focused on creating and distributing authoritative and engaging content and other products and services.",
      url: "https://jp.wsj.com/articles/the-contradictions-of-sam-altman-ai-crusader-72c6467a",
      urlToImage: "https://images.wsj.net/im-754256/social",
      publishedAt: "2023-04-07T00:48:20Z",
      content: "",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Miles Kruppa",
      title: "WSJスクープ | グーグル、検索エンジンに対話型AI搭載へ",
      description:
        "米グーグルは人工知能（AI）による対話機能を検索エンジンに追加する計画だ。スンダー・ピチャイ最高経営責任者（CEO）が明らかにした。 グーグルは米オープンAIが開発したチャットボット（自動会話プログラム）「チャットGPT」などの競合サービスや、経営に関わるその他の圧力への対応を求められている。同社のかじ取り...",
      url: "https://jp.wsj.com/articles/google-ceo-sundar-pichai-says-search-to-feature-chat-ai-1ad87b59",
      urlToImage: "https://images.wsj.net/im-758635/social",
      publishedAt: "2023-04-06T17:32:39Z",
      content:
        "AICEO\r\nAIGPTWSJAI\r\nCEO\r\nLLM\r\nLLM\r\nBingGPT\r\n1612000\r\n920\r\nAIGPT\r\nAIAI11GPTCEO2WSJ\r\nBingGPT901202630\r\nLLM20\r\nAI1620\r\n3AIBard\r\nAIBardBard\r\nCopyright ©2022 Dow Jones &amp; Company, Inc. All Rights Reserv… [+35 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Decentralized Crypto Markets Threaten National Security, Treasury Says...",
      description:
        "In new report, the department lays foundation for regulation, enforcement of ‘DeFi’ markets",
      url: "https://www.wsj.com/articles/decentralized-cryptocurrency-markets-threaten-u-s-national-security-treasury-says-d9dd324f",
      urlToImage: "https://images.wsj.net/im-758898/social",
      publishedAt: "2023-04-06T15:00:04Z",
      content:
        "Decentralized Cryptocurrency Markets Threaten U.S. Security, Treasury Says\r\nPhoto illustration: Tammy Lian/WSJWASHINGTON—The burgeoning decentralized cryptocurrency market threatens U.S. national sec… [+968 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Fifty years after death, Picasso's work has lost none of its punch...",
      description:
        "Fifty years after his death, Picasso’s work has lost none of its punch",
      url: "https://www.wsj.com/articles/celebrating-picasso-airdigital-9bbc91db",
      urlToImage: "https://images.wsj.net/im-756797/social",
      publishedAt: "2023-04-06T11:00:04Z",
      content:
        "Celebrating Picasso\r\nPablo Picasso died 50 years ago on April 8, age 91. The occasion is being marked by nearly 50 Picasso-themed exhibitions in the U.S. and Europe and, here, by a selection of past … [+795 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "Bank Failures. High Inflation. Rising Rates. Jobs Market About to Crack?",
      description:
        "Hiring in U.S. has surged since the start of last year, but economic risks threaten to cool the gains",
      url: "https://www.wsj.com/articles/bank-failures-high-inflation-rising-rates-is-the-resilient-jobs-market-about-to-crack-e1f566f6",
      urlToImage: "https://images.wsj.net/im-757246/social",
      publishedAt: "2023-04-06T11:00:04Z",
      content:
        "Bank Failures. High Inflation. Rising Rates. Is the Resilient Jobs Market About to Crack?\r\nPhoto: Brandon Bell/Getty ImagesThe U.S. labor market has been on a tear since the economy bounced back from… [+1091 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Ex-Tabloid King Poses Threat...",
      description:
        "David Pecker could provide testimony potentially hurting the ex-president in criminal case",
      url: "https://www.wsj.com/articles/ex-tabloid-king-poses-threat-to-donald-trump-in-hush-money-case-48da68f",
      urlToImage: "https://images.wsj.net/im-758717/social",
      publishedAt: "2023-04-06T11:00:04Z",
      content:
        "Ex-Tabloid King Poses Threat to Donald Trump in Hush-Money CaseCopyright ©2023 Dow Jones & Company, Inc. All Rights Reserved. 87990cbe856818d5eddac44c7b1cdeb8Continue reading your article witha WSJ s… [+475 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Stocks Haven't Looked This Unattractive Since '07...",
      description:
        "The allure of shares dimmed when bond yields surged and the corporate-earnings picture continued to darken",
      url: "https://www.wsj.com/articles/stocks-havent-looked-this-unattractive-since-2007-78fc374c",
      urlToImage: "https://images.wsj.net/im-758494/social",
      publishedAt: "2023-04-06T11:00:04Z",
      content:
        "Stocks Haven’t Looked This Unattractive Since 2007\r\nThe reward for owning stocks over bonds hasn’t been this slim since before the 2008 financial crisis. The equity risk premium—the gap between the S… [+748 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "CHIPOTLE Peppered With Complaints Over Salsa Spiciness...",
      description:
        "To investigate the hot issue, The Wall Street Journal sent samples of Chipotle’s salsa from three cities to a New Mexico lab that tests the Scoville units of chile peppers",
      url: "https://www.wsj.com/articles/chipotle-salsa-spicy-complaints-peppers-b0e516a0",
      urlToImage: "https://images.wsj.net/im-757390/social",
      publishedAt: "2023-04-05T15:00:04Z",
      content:
        "Chipotle Peppered With Complaints Over Salsa SpicinessDerek Osborne likes spicy food, but this was different.A few bites into his chicken burrito, his mouth was overtaken by a wave of heat, dulling h… [+702 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "'The Robots Have Finally Come for My Job'...",
      description:
        "Could ChatGPT lay waste to millions of professional jobs, including journalists?",
      url: "https://www.wsj.com/articles/the-robots-have-finally-come-for-my-job-34a69146",
      urlToImage: "https://images.wsj.net/im-757720/social",
      publishedAt: "2023-04-05T13:00:04Z",
      content:
        "The Robots Have Finally Come for My Job\r\nPhoto illustration: Preston Jessee for The Wall Street JournalFor centuries, new waves of automation have been greeted by predictions of widespread job loss a… [+814 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title:
        "SIGNATURE Insiders Sold $100 Million in Stock During Crypto Surge...",
      description:
        "Sales went largely unnoticed by investors due to securities rules and filing method",
      url: "https://www.wsj.com/articles/signature-bank-insiders-sold-100-million-in-stock-during-crypto-surge-a9f77615",
      urlToImage: "https://images.wsj.net/im-755379/social",
      publishedAt: "2023-04-04T22:00:05Z",
      content:
        "WSJ News Exclusive | Signature Bank Insiders Sold $100 Million in Stock During Crypto SurgeNet proceeds of Signature Bank stock sold by executives and directors70The company’s stock grew 140% in 2021… [+2268 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Jing Yang, and, Shen Lu",
      title: "WSJスクープ | アリババ分割、マー氏が海外から指揮＝関係筋",
      description:
        "【香港】富豪の馬雲（ジャック・マー）氏は、自身が築き上げた中国の電子商取引最大手アリババグループの分割を海外から指揮していた。事情に詳しい関係者が明らかにした。 マー氏は2019年にアリババの執行役会長を退いた後も同社への影響力を持ち続け、戦略決定に積極的に関わっていると関係者は話す。ここ数カ月は電話...",
      url: "https://jp.wsj.com/articles/jack-ma-engineered-alibaba-restructuring-from-overseas-sources-say-c710b46a",
      urlToImage: "https://images.wsj.net/im-753562/social",
      publishedAt: "2023-03-31T00:34:24Z",
      content: "",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "Wall Street Bonuses Down 26% -- to $176,000...",
      description: "Average bonus was $176,000 last year, down 26% from 2021",
      url: "https://www.wsj.com/articles/wall-street-bonuses-fall-by-most-since-2008-c9f5a9e7",
      urlToImage: "https://images.wsj.net/im-754225/social",
      publishedAt: "2023-03-30T20:00:03Z",
      content:
        "Wall Street Bonuses Fall by Most Since 2008\r\nThe average Wall Street bonus fell 26% last year, the biggest percentage drop since the financial crisis, as a slump in deal making cut into bankers’ comp… [+987 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Alexander Gladstone",
      title:
        "Bed Bath & Beyond Terminates Hudson Bay Deal, Turns to Market To Raise $300 Million",
      description:
        "Distressed retailer pulls out of equity deal with hedge fund and is seeking to tap retail market instead",
      url: "https://www.wsj.com/articles/bed-bath-beyond-terminates-hudson-bay-deal-turns-to-market-to-raise-300-million-e4b513ad",
      urlToImage: "https://images.wsj.net/im-754097/social",
      publishedAt: "2023-03-30T14:46:00Z",
      content:
        "Bed Bath &amp; Beyond Inc. on Thursday launched an effort to sell up to $300 million of common stock while it terminated its previous fundraising deal with hedge fund Hudson Bay Capital Management LP… [+200 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Ian Buruma",
      title: "戦争への備え再び、日本とドイツの避けがたい道",
      description:
        "――筆者のイアン・ブルマ氏は米バード大学教授（人権・ジャーナリズム）。近著に「The Collaborators: Three Stories of Deception and Survival in World War II（協力者たち：第2次大戦の生き残りと策略に関する三つの物語）」がある ＊＊＊ ドイツのオラフ・ショルツ首相は、今この瞬間を「時代の転換点」と呼んでいる...",
      url: "https://jp.wsj.com/articles/japan-and-germany-are-again-preparing-for-war-cc13bf42",
      urlToImage: "https://images.wsj.net/im-750172/social",
      publishedAt: "2023-03-30T00:39:10Z",
      content:
        "The Collaborators: Three Stories of Deception and Survival in World War II2\r\n21000140600NATOGDP22550\r\n...",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Georgi Kantchev and Evan Gershkovich",
      title: "崩壊し始めたロシア経済、来年には資金枯渇か",
      description:
        "【モスクワ】ロシアによるウクライナ侵攻開始当初は、石油・ガス価格が跳ね上がり、ロシアに思わぬ巨額の利益をもたらした。だが、こうした局面は終わった。 戦争が2年目に突入する中、西側の制裁による打撃が広がり、ロシア政府の財政は厳しさを増している。経済は低成長軌道へとシフトし、長期的に脱却できない可能性...",
      url: "https://jp.wsj.com/articles/russias-economy-is-starting-to-come-undone-51a1bb43",
      urlToImage: "https://images.wsj.net/im-744992/social",
      publishedAt: "2023-03-29T02:52:53Z",
      content:
        "2\r\n1120\r\nIISS\r\n65\r\n121234044600GDP1.5SWF\r\n280SWF1470\r\n20\r\nIMF20143.51\r\n1\r\n2114\r\n199330\r\nX2020SR\r\n20224IT\r\nIT\r\n72124145\r\nGDP2.11015\r\nEU7G712GDP4IMF\r\n124650\r\n100\r\n249.5680\r\n20226.72015AEB262\r\nIMF\r\nIMF2… [+134 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "IRS Makes Strange House Call on Matt Taibbi...",
      description:
        "An agent shows up at the home of the Twitter files journalist who testified before Congress.",
      url: "https://www.wsj.com/articles/irs-matt-taibbi-twitter-files-jim-jordan-daniel-werfel-lina-khan-84ee518",
      urlToImage: "https://images.wsj.net/im-751889/social",
      publishedAt: "2023-03-28T12:00:04Z",
      content:
        "Opinion | The IRS Makes a Strange House Call on Matt Taibbi\r\nOn March 9, 2023, journalists Matt Taibbi and Michael Shellenberger testified before a congressional hearing on the growth of 'a censorshi… [+1303 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "wsj",
      title: "The Jobs Most Exposed to ChatGPT...",
      description:
        "New study finds that AI tools could more quickly handle at least half of the tasks that auditors, interpreters and writers do now",
      url: "https://www.wsj.com/articles/the-jobs-most-exposed-to-chatgpt-e7ceebf0",
      urlToImage: "https://images.wsj.net/im-752015/social",
      publishedAt: "2023-03-28T12:00:04Z",
      content:
        "The Jobs Most Exposed to ChatGPTAccountants are among the professionals whose careers are most exposed to the capabilities of generative artificial intelligence, according to a new study. The researc… [+829 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Gwynn Guilford",
      title: "リモートワーク時代が終わった米国",
      description:
        "新型コロナウイルス禍で数百万人の米国人が職場から自宅の地下室や寝室に引きこもってから数年、リモート勤務は希少なものになりつつある。 米労働省が先週発表したリポートによると、昨年は従業員がめったに、または全くテレワークをしなかったと回答した事業所の割合は72.5％に上った。この数字は2021年の60.1％から上...",
      url: "https://jp.wsj.com/articles/work-from-home-era-ends-for-millions-of-americans-212867de",
      urlToImage: "https://images.wsj.net/im-750406/social",
      publishedAt: "2023-03-28T09:29:04Z",
      content:
        "72.5202160.1222100\r\n72.520276.7\r\n92\r\n4CEO\r\n212213.42144.92222\r\n21877030\r\n22892179\r\nIT67.449\r\n2110.311.142.24.8\r\n23\r\n3223023227.7205605\r\n211154.6260.832\r\n13223174\r\nCopyright ©2022 Dow Jones &amp; Comp… [+62 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "lxm",
      title: "For the First Time, the Fed Is Losing Money",
      description:
        "Article URL: https://www.wsj.com/articles/for-the-first-time-the-fed-is-losing-money-mortage-backed-securities-treasurys-interest-rate-risk-svb-ad92e96f\nComments URL: https://news.ycombinator.com/item?id=35335097\nPoints: 7\n# Comments: 2",
      url: "https://www.wsj.com/articles/for-the-first-time-the-fed-is-losing-money-mortage-backed-securities-treasurys-interest-rate-risk-svb-ad92e96f",
      urlToImage: "https://images.wsj.net/im-750632/social",
      publishedAt: "2023-03-28T02:31:07Z",
      content:
        "Like all central banks, the Federal Reserve was designed to make money for the government from its monopoly on issuing currency. The Fed did generate profits, which it sent to the Treasury, every yea… [+582 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Robbie Whelan",
      title: "Hollywood Betting on Fear...",
      description:
        "A boom in scary movies is here as studios seek to lure audiences back to theaters. Brace yourself for a new brand of horror.",
      url: "https://www.wsj.com/articles/horror-movie-boom-smile-nope-m3gan-host-barbarian-4e44a0d1",
      urlToImage: "https://images.wsj.net/im-750110/social",
      publishedAt: "2023-03-25T14:16:37Z",
      content:
        "Hollywood, once again, is resorting to scare tactics.\r\nProducers and studio chiefs say were headed into a horror-movie boom, as they rush to sign big-ticket deals with top writers and directors in th… [+732 chars]",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      data: this.articles,
      currentPage: 1,
      itemsPerPage: 15,
      loading: true,
    };
  }

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
    const element = document.getElementById('scrollUp');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
    const element = document.getElementById('scrollUp');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  handlePerPageChange = (event) => {
    this.setState({
      itemsPerPage: Number(event.target.value),
      currentPage: 1,
    });
  };

  render() {
    const { data, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    return (
      <>
        <div className="container my-5" id="scrollUp">
          <h1 className="my-3">
            Explore more articles:
            <select
              className={`btn btn-sm btn-${this.props.mode==='light'?'dark':'light'} mx-3`}
              value={itemsPerPage}
              onChange={this.handlePerPageChange}
            >
              <option className="dropdown-item" value={15}>
                15-articles per page
              </option>
              <option className="dropdown-item" value={30}>
                30-articles per page
              </option>
              <option className="dropdown-item" value={50}>
                50-articles per page
              </option>
            </select>
          </h1>
          <div className="row" mode={this.state.mode}>
            {currentData.map((elem, index) => {
              return (
                <div className="container col-md-4" key={index}>
                  <NewsItem
                    title={
                      elem.title
                        ? elem.title.slice(0, 60) + "..."
                        : "Not available"
                    }
                    description={
                      elem.description
                        ? elem.description.slice(0, 80) + "..."
                        : "Not available click on Read-more to get a detailed view"
                    }
                    imageUrl={elem.urlToImage}
                    newsUrl={elem.url}
                    mode={this.props.mode}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between my-2">
            <button
              disabled={currentPage === 1}
              className={`btn btn-sm btn-${this.props.mode==='light'?'dark':'light'}`}
              onClick={this.handlePrevClick}
            >
              &larr; previous
            </button>
            <button
              disabled={currentPage === totalPages}
              className={`btn btn-sm btn-${this.props.mode==='light'?'dark':'light'}`}
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
