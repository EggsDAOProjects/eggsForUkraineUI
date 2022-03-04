import React, { ReactNode, useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useEthers, useContractFunction } from '@usedapp/core';
import { Contract  } from '@ethersproject/contracts';
import { utils } from 'ethers';
import { formatDecimal } from '../utils/utils';
import { useWeb3Modal, useActiveChain } from '../hooks';

interface ProjectDescriptionProps {
  title: string;
  subtitle: string|ReactNode;
  img: string;
  paragraphs: string[]|ReactNode[];
  direction?: string;
  value: number;
  opensea?: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ title, subtitle, img, direction="width", value, opensea, paragraphs=[], ...props }) => {
  let imgClasses = "w-full";

  if (direction === "height") {
    imgClasses = "h-full mx-auto";
  }

  return (
    <div className="md:flex mt-12">
      <div className="md:w-1/2 md:px-4">
        { img ? (
          <img src={img} alt={title} className={imgClasses} />
        ) : (
          <div className="w-full h-full border border-black" />
        ) }
      </div>
      <div className="md:w-1/2 md:px-4 mt-8 lg:mt-0">
        <h3 className="font-bold text-2xl mb-1">{title}</h3>
        <h4 className="mb-1">{subtitle}</h4>
        <h4 className="mb-1">Value: <strong>{value}Ξ</strong></h4>
        { opensea ? (
          <p className="mb-4">
            <a href={opensea} className="underline" target="_blank" rel="noreferrer">
              OpenSea
            </a>
          </p>
        ) : null }
        {paragraphs.map(p => (
          <p className="mt-2">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

const Projects: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Projects Involved</title>
        <meta name="description" content="The projects involved" />
      </Head>
      <div className="background-image-rotated"></div>

      <main className="container mx-auto pt-12 z-10 relative px-4">
        <div className="text-white mx-auto lg:w-4/5">
          <p>
            Check out the awesome projects and individuals who supported Eggs for Ukraine by providing prizes for the raffle. If you’d like to donate a valuable NFT to the raffle, please contact <a href="https://twitter.com/eggsdao" target="_blank" rel="noreferrer" className="underline">EggsDAO.</a>
          </p>
          <ProjectDescription
            title="Experience #28 by Laith Safa"
            value={1.5}
            img="https://lh3.googleusercontent.com/yGzmszxXfMvegZj8HmUGDsfht9DTXoI8jesr-gm4LNiATHj-W5DjRpGFUEaU_o2QT2-HF9QhLr2kzRIvRbJLpOL_Glzth3aqtPNSHw=w600"
            subtitle={<>Donated by <a href="https://twitter.com/CozomoMedici" target="_blank" rel="noreferrer" className="underline">@CozomoMedici</a></>}
            opensea="https://opensea.io/assets/0x31a0ea69be21f5b07bc331009652055eaf1900be/28"
            paragraphs={[
              "This handmade 1/1 item was created by Laith Safa whose collection explores thoughts, emotions, and human encounters layering onto one another to produce change in our lives. We have and will continue to evolve. For better or worse is up to you.",
              "This item was generously donated by Cozomo de' Medici",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="TwitterEgg (Grey, 2015)"
            value={30}
            subtitle={<>Donated by <a href="https://twitter.com/eggsdao" target="_blank" rel="noreferrer" className="underline">@EggsDAO</a></>}
            img="https://s3.amazonaws.com/kd4/kharn"
            opensea="https://opensea.io/assets/emblem-vault?search[stringTraits][0][name]=Twitter%20Eggs&search[stringTraits][0][values][0]=All%20Twitter%20Eggs&search[sortAscending]=true&search[sortBy]=PRICE"
            paragraphs={[
              "Twitter Eggs are among the earliest NFTs in blockchain history. They exist on Namecoin, the first fork of Bitcoin. Some early crypto users made use of an app called Onename to lock their profiles into the blockchain forever. In total less than 300 Eggs were created. They are one of the first profile picture NFT collectibles. Not associated with Twitter Inc.",
              "The TwitterEgg NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="Misprint TwitterEgg"
            value={60}
            subtitle={<>Donated by <a href="https://twitter.com/eggsdao" target="_blank" rel="noreferrer" className="underline">@EggsDAO</a></>}
            img="https://lh3.googleusercontent.com/hEy6V9swI_USVVul0M7Ztd5eHwjDcG7XdUImJGEp7D9fHjuR_aaLrr8fTetGk212mWATICkxGWZyvCMNZN-b8-bLkoZUzZ8GCHy8=w600"
            opensea="https://opensea.io/assets/emblem-vault?search%5bstringTraits%5d%5b0%5d%5bname%5d=Twitter%20Eggs&search%5bstringTraits%5d%5b0%5d%5bvalues%5d%5b0%5d=All%20Twitter%20Eggs&search%5bsortAscending%5d=true&search%5bsortBy%5d=PRICE"
            paragraphs={[
              "This is a misprint TwitterEgg with the text 'May Be A Joke' overlayed on a purple egg.",
              "Misprint TwitterEggs are the original egg PFP from Twitter but the picture has been edited by the user before being minted on the Namecoin blockchain, thus Misprint TwitterEggs was born.",
              "There are only 7 Misprint TwitterEggs in total.",
              "The Misprint TwitterEgg NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle."
            ]}
          />
          <ProjectDescription
            title="Umbrella Ukraini"
            value={1}
            subtitle={<>Donated by <a href="https://twitter.com/meta_r00t" target="_blank" rel="noreferrer" className="underline">@Meta_R00T</a> and <a href="https://twitter.com/imblakehotz" className="underline" target="_blank" rel="noreferrer">@ImBlakeHotz</a></>}
            img="https://i.imgur.com/LEEDaJM.png"
            opensea="https://opensea.io/collection/somnium-space"
            paragraphs={[
              "R00T and Blake Hotz together with EggsDao  and Umbrella2014 pray for 🇺🇦 .",
              "Umbrella Ukraini is created to support peace and healing in times when we need it most.",
              "The NFT Avatar can be used in @SomniumSpace Metaverse.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle."
            ]}
          />
          <ProjectDescription
            title="Namecoin NFT (6 total)"
            value={1}
            img="/namecoin_nfts.png"
            subtitle={<>Donated by <a href="https://twitter.com/eggsdao" target="_blank" rel="noreferrer" className="underline">@EggsDAO</a></>}
            opensea="https://opensea.io/assets/emblem-vault?search[stringTraits][0][name]=NMC&search[stringTraits][0][values][0]=Namecoin&search[sortAscending]=true&search[sortBy]=PRICE"
            paragraphs={[
              "Namecoin was designed to be a decentralized name registration service, similar to Ethereum's ENS.  It was launched all the way back in 2011 but as early as 2014 a company called OneName began to be used with another use case in mind.",
              "OneName built a decentralized identity platform around Namecoin, allowing people to register a name along with any other relevant information about them on the blockchain.  In these profiles was space to include links to images of themselves but some added something that better represented who they are in the digital realm.",
              "The art offered here for participating in this worthwhile mint is some of the earliest ever tokenized to any blockchain.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="WVRP #957"
            value={0.4}
            subtitle={<>Donated by <a href="https://twitter.com/warpsound_ai" target="_blank" rel="noreferrer" className="underline">@warpsound_ai</a></>}
            img="https://lh3.googleusercontent.com/Cx0aljW-PdjW9_73jw_QW0KYYwOXnGUuid1UPNaqXzpI04Jk_LwrA5UfEJusALjaT1tTocqa2j6KUZgo4SPXq7PbTuV2uORrTmqv1Q=w600"
            opensea="https://opensea.io/assets/0xcbc67ea382f8a006d46eeeb7255876beb7d7f14d/957"
            paragraphs={[
              "WVRPS are 9,999 NFTs comprised of a hybrid of generative PFP art + AI-composed music minted on the Ethereum blockchain.",
              "They are the opening note of WarpSound’s larger vision for social music experience, helping ignite the future of generative music creativity + synthetic artistry.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="UMBRELLA | Nov 2014"
            subtitle={<>Donated by <a href="https://twitter.com/umbrella2014" target="_blank" rel="noreferrer" className="underline">@Umbrella2014</a></>}
            value={2.8}
            img="https://ipfs.io/ipfs/QmUXEwNcFfBocvsxH1ZmJtWrpanSuVapXwPJRxaTwsm8TJ?filename=UMBRELLA.png"
            opensea="https://opensea.io/assets/emblem-vault?search%5BsortAscending%5D=true&search%5BsortBy%5D=PRICE&search%5BstringTraits%5D%5B0%5D%5Bname%5D=XCP&search%5BstringTraits%5D%5B0%5D%5Bvalues%5D%5B0%5D=UMBRELLA"
            direction="height"
            paragraphs={[
              "UMBRELLA is a historic Counterparty token issued in November 2014. It was the first time a token was issued on the Bitcoin blockchain as part of a plan to deliver a physical product. The 600 original token supply was chosen because that was the minimum order from the manufacturer. The UMBRELLA asset would be pegged to the Bitcoin umbrellas 1:1 and eventually exchanged for the real thing.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="Ethereal Ape #416"
            subtitle={<>Donated by <a href="https://twitter.com/etherealapes" target="_blank" rel="noreferrer" className="underline">@EtherealApes</a></>}
            value={0.1}
            img="https://lh3.googleusercontent.com/h1R3vY_p1dG3ts_lYBLgVobqd_xxLBm_9rsMXdAyIO77kiQyO0IJ3hlW5-82v-IxwObBYGE2XOxnNNnBcOdkZ5TEuZkcSVra9vAgmA=w600"
            opensea="https://opensea.io/assets/0x8fa6a34aa6a246f3e7f60d43f3596a5e61bed879/416"
            paragraphs={[
              "Ethereal Apes is a collection of 3,333 fine art apes living on the Ethereum blockchain.  The collection prioritizes quality art above all else.  This particular robot ape features a very somber theme with it's monocle, dark color palette, and coveted zombie eyes",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="9x LONDON EMBERS by POB"
            value={0.45}
            subtitle={<>Donated by <a href="https://twitter.com/prrfbeauty" target="_blank" rel="noreferrer" className="underline">@ProofOfBeauty</a> and <a href="https://twitter.com/londondao" className="underline" target="_blank" rel="noreferrer">@LondonDAO</a></>}
            img="https://london.pob.studio/embers/2.svg"
            opensea="https://opensea.io/collection/london-embers"
            paragraphs={[
              "London Embers are generative art collection on the Ethereum blockchain, celebrating the upcoming ETH2 Merge. The Embers collection is ever-evolving, as new Embers can always be created by burning London Gift or Embers NFTs. Embers were created by the talented artists at Proof of Beauty Studios, and all proceeds from their sales supports the London DAO.",
              "London DAO, and several London DAO Community members have donated a total of nine EMBERs as raffle prizes. For more information about London DAO and Embers, visit us at london.pob.studio.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="Tile #1406"
            value={1.75}
            subtitle={<>Donated by <a href="https://twitter.com/PixelMapNFT" target="_blank" rel="noreferrer" className="underline">@PixelmapNFT</a></>}
            img="https://lh3.googleusercontent.com/YWpksBz2oEdd0-UTT7nQZSsMcgDOxoRhocgyVMJbxtG4JgkdVmJoho6L4QEIujRHtpirIixkDUIReVKHAy4jxmUKlo8roTtBdxJx=w600"
            opensea="https://opensea.io/assets/0x050dc61dfb867e0fe3cf2948362b6c0f3faf790b/1406"
            paragraphs={[
              "PixelMap is the oldest verified collection OpenSea, launched on November 17, 2016. PixelMap is the first NFT to store image data directly on the Ethereum blockchain.",
              "Each tile is truly owned by the entity that purchases it. Because the data itself, not just a pointer, is stored on the Blockchain, nothing short of every single Ethereum node shutting down can eliminate the data.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="OnChainMonkey Dessert"
            value={0.6}
            subtitle={<>Donated by <a href="https://twitter.com/LeonidasNFT" target="_blank" rel="noreferrer" className="underline">@LeonidasNFT</a></>}
            img="https://storage.opensea.io/files/bb8e698c9754d244fdd90feca16987ed.svg"
            opensea="https://opensea.io/assets/0x5079fc4e96338be1b5aff236ff4b00ec4452b2d3/1"
            paragraphs={[
              "The OnChainMonkey Desserts are 100% ON CHAIN and in ONE transaction!",
              "D1 Incredible Ice Pop is part of the The OnChainMonkey Desserts collection.",
              "Leonidas is one of the most known NFT Archaeologist: “In order to build a brighter future we must first understand our past.”",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="SATOSHILITE - Spells of Genesis (2016)"
            value={3.5}
            subtitle={<>Donated by <a href="https://twitter.com/EmilySnow101010" target="_blank" rel="noreferrer" className="underline">@EmilySnow101010</a></>}
            img="https://lh3.googleusercontent.com/PZr0SbRiM2-5d-aF82ydqqnGMONiVs_yuMmUACVmM4LBeUg4aQHG3R3XfZGhQ-X9KfeI6mgAovKl9jnnM6LN3hqrkyrT6-QwJMJX-No=w600"
            opensea="https://opensea.io/assets/emblem-vault?search%5bstringTraits%5d%5b0%5d%5bname%5d=Spells%20of%20Genesis&search%5bstringTraits%5d%5b0%5d%5bvalues%5d%5b0%5d=SATOSHILITE&search%5bsortAscending%5d=true&search%5bsortBy%5d=PRICE"
            direction="height"
            paragraphs={[
              "Spells of Genesis featured the world’s first tokenized blockchain gaming assets. This project marked the humble genesis of the Metaverse.  The Satoshilite, minted in 2016, was an homage to Litecoin, one of the first altcoins in existence.",
              "Supply: 1 of 500",
              "Minted: February 3rd 2016",
              "EmilySnow.eth is an aficionado of historical NFTs who hopes the war in Ukraine will end soon.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="Aether Unit 731"
            value={1}
            subtitle={<>Donated by <a href="https://twitter.com/aether_city" target="_blank" rel="noreferrer" className="underline">@Aether_city</a></>}
            img="/aether_unit.png"
            opensea="https://opensea.io/assets/0x31d4C5be1082A88F2ABAFeA549B6C189C2cf057F/731"
            paragraphs={[
              "Launched in March 2018, Aether is the first metaverse build on NFT (ERC721) standards. A building is a top level property in Aether that is occupied by a number of units. A unit is the smallest form of property ownership in Aether. Aether metaverse gives individuals control over a piece of the world where they are free to create unique experiences unlike anything in existence.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="MTM Series – 2016 Music NFTs"
            img="https://pbs.twimg.com/profile_images/1486753864464351238/Rcj2Fpt3_400x400.jpg"
            value={1}
            subtitle={<>Donated by <a href="https://twitter.com/mtmseries" target="_blank" rel="noreferrer" className="underline">@MTMSeries</a></>}
            paragraphs={[
              "MTMSONG: https://xchain.io/asset/MTMSONG",
              "MTMALBUM: https://xchain.io/asset/MTMALBUM",
              "The MTM Series are four Counterparty $XCP tokens issued in 2016 and created by Adam B. Levine. These assets allowed holders to redeem them for the streaming and downloading of tracks from Adam's EP, A Little Color.",
              "In 2014 Adam conceptualized what he called \"Token Controlled Viewpoint\" or \"TCV\". He applied this concept to the MTM Series and cemented them in history by creating some of the earliest examples of true music ownership - MusicNFTs.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="StudioUno - Norte #293"
            value={0.075}
            subtitle={<>Donated by <a href="https://twitter.com/cryptoarte" target="_blank" rel="noreferrer" className="underline">@CryptoArte</a> and <a href="https://twitter.com/studiounonft" className="underline" target="_blank" rel="noreferrer">@StudioUnoNFT</a></>}
            img="/norte.png"
            opensea="https://opensea.io/assets/0x4834e620cff02b44a68d416da8a971a12228228c/293"
            paragraphs={[
              "https://studiouno.io/about",
              "Brought by the S1 team and Sebastián Brocher (creator of CryptoArte, the first Ethereum generative art NFT collection), Norte is our inaugural project. A radically fresh experience, Norte empowers collectors to create and mint beautiful art pieces that project their Ethereum address to create unique web3 identities.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="4x Cards from The CryptoCards Collection (2018)"
            value={0.98}
            img="/crypto_cards.png"
            subtitle={<>Donated by <a href="https://twitter.com/the_cryptocards" target="_blank" rel="noreferrer" className="underline">@CryptoCards</a></>}
            opensea="https://opensea.io/collection/cryptocards-collection"
            paragraphs={[
              "Cards donated: The Bitcoin Sell-Off, The Bitfinex Hack, Bitcoin Gold Fork, IRS and Coinbase",
              "The Cryptocards collection was created at the dawn of what is considered cryptoart or NFTs today being minted on January 2018.",
              "It is the only NFT collection chronicling the history of Bitcoin until Jan 2018 with 64 cards with a total supply of 8.451.",
              "The initial CryptoCards were issued as a ERC-20, but we developed an ERC1155 wrapper to make them available on OpenSea.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="4x Derage"
            value={0.4}
            img="https://lh3.googleusercontent.com/Bs2eUUmyvjM7RmU1CHA6dSKhpsQAsx6BNSShzvAW0AvBvOS_TuQdCcORmwKcBxxK1NwHdEO2eF67Fe76vtdXF_DiPAT_ca4sBpgh=s0"
            opensea="https://opensea.io/collection/derage"
            subtitle={<>Donated by <a href="https://twitter.com/darkfarms1" target="_blank" rel="noreferrer" className="underline">@Darkfarms1</a></>}
            paragraphs={[
              "A 4201 Derivate Degen Rage collection by Darkfarms1",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="10x NFT2040"
            value={3.5}
            img="https://pbs.twimg.com/profile_images/1494455482098106380/1p1O4jMy_400x400.jpg"
            opensea="https://opensea.io/collection/nft2040-crates"
            subtitle={<>Donated by <a href="https://twitter.com/nft2040" target="_blank" rel="noreferrer" className="underline">@NFT2040</a></>}
            paragraphs={[
              "A Blockchain-Based Battle Royale for NFTs.",
              "They provide utility to existing NFT collections, and a common meeting ground for communities. Drop your own NFT into the Arena and compete to be the last fighter standing.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="ALPACADABRAZ 3D"
            value={0.2}
            img="https://lh3.googleusercontent.com/Kgsg-xo-BJ70rJ4OpUJBGVGSw2hLZSrfg-kponGjMYWwjpEPCRG1ErN6dzM1Wd1MR9p0h1dA5RWFGOHQvMjiGli5qzwnHPhYeOLJ=s0"
            opensea="https://opensea.io/collection/alpacadabraz-3d"
            subtitle={<>Donated by <a href="https://twitter.com/ALPACADABRAZ" target="_blank" rel="noreferrer" className="underline">@ALPACADABRAZ</a></>}
            paragraphs={[
              "3D Pacas are your ticket to the upcoming \"PacaVerse\". Whether you enjoy eSports, Play to Earn or simply Socializing in the Metaverse, your Pacas can do it all",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="Meta Legend"
            value={0.16}
            img="https://lh3.googleusercontent.com/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg=s0"
            opensea="https://opensea.io/collection/meta-legends"
            subtitle={<>Donated by <a href="https://twitter.com/Poseidon_SF" target="_blank" rel="noreferrer" className="underline">@Poseidon_SF</a></>}
            paragraphs={[
              "Their goal is to create a complete ecosystem with an app Meta-Connect and a Metaverse Meta-Life",
              "Poseidon DAO is a DAO that invests in the NFT space, poised to capture history’s greatest new tech.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="SMUGPEPE"
            value={4.2}
            img="https://lh3.googleusercontent.com/ED5pBrn4ZwkXmMCS9kw2YP4surdEPJNveheU8Ekzjpdivlz228ZgCFfO0lkY-BQlvlNOBbhejXcnNsHwWAnkeuaHEVfLImsOHBgPpaM=w600"
            opensea="https://opensea.io/collection/emblem-vault?collectionSlug=emblem-vault&search[sortBy]=PRICE&search[sortAscending]=true&search[stringTraits][0][name]=Rare%20Pepe&search[stringTraits][0][values][0]=SMUGPEPE"
            subtitle={<>Donated by <a href="https://twitter.com/pepe__wtf" target="_blank" rel="noreferrer" className="underline">@pepe__wtf</a></>}
            paragraphs={[
              "SMUGPEPE is Card 48 of Series 15, Minted in September 2017 by Finest Rares.",
              "Rare Pepes represent the birth of CryptoArt on the Bitcoin blockchain, created by various artists world wide between 2016 and 2018. They are based on Pepe the Frog and traded as non-fungible tokens (NFTs) on the CounterParty platform.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="GNOMECARD (2016) 'The First Delivery'"
            value={0.25}
            img="https://cdn.discordapp.com/attachments/946571403677794334/948212305102008350/IMG_2150.jpg"
            opensea="https://opensea.io/assets/emblem-vault?search[stringTraits][0][name]=Spells%20of%20Genesis&search[stringTraits][0][values][0]=GNOMECARD&search[sortAscending]=true&search[sortBy]=PRICE"
            subtitle={<>Donated by <a href="https://twitter.com/NftHole" target="_blank" rel="noreferrer" className="underline">@NftHole</a></>}
            paragraphs={[
              "Spells of Genesis featured the world’s first tokenized blockchain gaming assets.",
              "NOMECARD (2016) \"The First Delivery\" depicts the infamous Bitcoin pizza transaction that took place in 2010, where a man in Florida paid for two pizzas using 10,000 Bitcoin",
              "Supply: 1 of 2000",
              "Minted: 22nd June 2016",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="3x Alto City"
            value={0.27}
            img="https://cdn.discordapp.com/attachments/946571403677794334/948592305898672158/IMG_2161.png"
            opensea="https://opensea.io/collection/altocity"
            subtitle={<>Donated by <a href="https://twitter.com/alto_city" target="_blank" rel="noreferrer" className="underline">@alto_city</a></>}
            paragraphs={[
              "Launched in August 2021.  Spanning the globe are 1060 cities in 15 different colour schemes, 9 original and 6 reflecting tributes to famous artists. The collection comprises of a total of 15,900 unique NFTs.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="3x CryptoKitties"
            value={0}
            img="https://lh3.googleusercontent.com/0HDc8FOdl1_Ax0xTtYUjP8cpUeyPXmIZFR6CPBxFctAJEYZ_KU0btrgyYaOfbG0D1ymVxNVq7zx0bLSm0HpyJ_mo9Q=w600"
            opensea="https://opensea.io/collection/cryptokitties"
            subtitle={<>Donated by <a href="https://twitter.com/shazgd" target="_blank" rel="noreferrer" className="underline">@shazgd</a></>}
            paragraphs={[
              "CryptoKitties is a blockchain game on Ethereum built by Dapper Labs in 2017.",
              "ShazGd builds products that make our lives a bit easier, like http://givingbackeasily.com/",
              "Kitties donated: 883986 (Gen0), 1110414 (Gen5), 2010889 (Gen6)",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
          <ProjectDescription
            title="MondriMaps - Kyiv"
            value={0.15}
            img="https://lh3.googleusercontent.com/A9cH5klN-iSyZu30assLZl_bgWg-KIXJ1yaR95l59ScgdoV-YNvTB9Kf68G72CcsM4h9putimbxsxZpMI6m2KNyPSaFLXlyF1B3NKw=w600"
            opensea="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/94745642509399252745101987571548674507040472797340692733845026307454070161409/"
            subtitle={<>Donated by <a href="https://twitter.com/nifty_1337" target="_blank" rel="noreferrer" className="underline">@nifty_1337</a></>}
            paragraphs={[
              "A collection which will consist of max. 300 of the most beautiful cities in the world. Created with AI and inspired by the famous Dutch painter, Piet Mondriaan.",
              "This NFT is one of our raffle prizes.",
              "All wallets that mint an EggForUkraine automatically enter the raffle." 
            ]}
          />
        </div>
      </main>
    </div>
  )
}

export default Projects
