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

const AboutEggsDAO: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>About EggsDAO</title>
        <meta name="description" content="About EggsDAO" />
      </Head>
      <div className="background-image-rotated"></div>

      <main className="container mx-auto pt-12 z-10 relative px-4 md:px-0">
        <div className="text-white md:w-1/2 mx-auto">
          <p>
            <a href="https://twitter.com" className="underline">EggsDAO</a> was created by a group of historical NFT collectors and DeFi lovers. The group was originally formed to bring together holders of the historic Namecoin TwitterEgg NFTs. The scope of the DAO has since grown into something much larger. With the experience, capital and network EggsDAO members bring to the table we believe we can have a large positive impact on the world.
          </p>
          <p className="mt-4">
            The DAO was formed in early December 2021 and currently has 54 members and manages over 350 eth in assets. All assets currently owned by the DAO can be seen at <a href="https://etherscan.io/address/0x831282ba73dd03aa8a27d3725ba3bcacb1bebc46" target="_blank" rel="noreferrer" className="underline">eggsdao.eth</a>
          </p>
          <p className="mt-4">
            The goals of the DAO are:
            <ul className="list-disc list-inside mt-4">
              <li>Invest in historical NFTs</li>
              <li>Invest in the future of NFTs and DeFi</li>
              <li>Do good in the world</li>
              <li>Try to be custodians of the culture of these assets as they garner larger mainstream appeal. Ensuring the history and culture is not lost to time.</li>
            </ul>
          </p>
          <h3 className="text-2xl font-bold mt-8">Our Artist</h3>
          <p className="mt-2">
            The &quot;Slava Ukraini&quot; art was created by an incredibly talented artist by the name of <a href="https://twitter.com/soulmonsta" target="_blank" rel="noreferrer" className="underline">soulmonsta</a>.
          </p>
          <p className="mt-2">
            Soulmonsta is an artist from Belarus, who works with democratic forces that support Ukraine and its people.
          </p>
          <p className="mt-2">
            The EggsDAO has worked with Soulmonsta on a few pieces for our social media posts but working along side them for this piece is especially meaningful.
          </p>
        </div>
      </main>
    </div>
  )
}

export default AboutEggsDAO
