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

const About: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>About Eggs For Ukraine</title>
        <meta name="description" content="About EggsDAO Minting for Ukraine" />
      </Head>
      <div className="background-image-rotated"></div>

      <main className="container mx-auto pt-12 z-10 relative px-4 md:px-0">
        <div className="text-white md:w-1/2 mx-auto">
          <h2 className="font-bold text-xl mb-2">
            What is Eggs For Ukraine?
          </h2>
          <p>
            Eggs for Ukraine is a charity mint event, geared to help Ukrainian people who are suffering tremendous losses from Russian invasion.
          </p>
          <h2 className="font-bold text-xl mb-2 mt-6">
            What happens after I mint an egg?
          </h2>
          <p>
            <ol className="list-decimal list-inside">
              <li>
                You receive an NFT of the egg to your wallet.
              </li>
              <li>
                All proceeds go toward Ukrainian people.
              </li>
              <li>
                Your wallet automatically receives 1 raffle entry for every 0.02Ξ donated.
              </li>
              <li>
                All the prizes are raffled off and awarded to lucky winners
              </li>
            </ol>
          </p>
          <h2 className="font-bold text-xl mb-2 mt-6">
            Where exactly are the funds going?
          </h2>
          <p>
            100% of funds from the mint and additional donations will go toward relief efforts in Ukraine.
          </p>
          <p>
            After the minting of EggsForUkraine is closed, all holders will be able to vote on the distribution of funds. The total funds will be then divided accordingly and distributed to the corresponding beneficiaries. Here are some options we are aware of (more can be added later):
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>
              <a href="https://novaukraine.org" className="underline" target="_blank" rel="noreferrer">
                Nova Ukraine – novaukraine.org
              </a>
            </li>
            <li>
              <a href="https://savelife.in.ua" className="underline" target="_blank" rel="noreferrer">
                Save Life – savelife.in.ua
              </a>
            </li>
            <li>
              <a href="https://ukrainedao.love" className="underline" target="_blank" rel="noreferrer">
                Ukraine DAO – ukrainedao.love
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Ukraine" className="underline" target="_blank" rel="noreferrer">
                Ukrainian Government  – twitter.com/Ukraine
              </a>
            </li>
            <li>
              <a href="https://twitter.com/KyivIndependent" className="underline" target="_blank" rel="noreferrer">
                Kyiv Independent  – twitter.com/KyivIndependent
              </a>
            </li>
          </ul>
          <p>
            All beneficiaries have public cryptocurrency wallets.
          </p>
          <h2 className="font-bold text-xl mb-2 mt-6">
            How can I know the funds actually reach these organizations?
          </h2>
          <p>
            Blockchain provides full transparency, both in terms of the total funds raised and the amounts donated. Once the mint event is over, you can check the status of the funds here: <a href="https://etherscan.io/address/0x4e7C4148A9A8d82195948a2C0EDF70BdaC825666" className="underline" target="_blank" rel="noreferrer">0x4e7C4148A9A8d82195948a2C0EDF70BdaC825666</a>
          </p>
          <p className="mt-2">The team will also announce once the funds reach its beneficiaries.</p>
          <h2 className="font-bold text-xl mb-2 mt-6">
            Who is the team behind the project?
          </h2>
          <p>
            Eggs for Ukraine was spearheaded by <Link href="/eggsdao"><span className="underline cursor-pointer">EggsDAO</span></Link>, and we are proud to partner with some <Link href="projects"><span className="underline cursor-pointer">amazing web3 projects</span></Link> to secure one-of-a-kind raffle prizes.
          </p>
          <h2 className="font-bold text-xl mb-2 mt-6">
            What if I have other questions?
          </h2>
          <p>
            You can contact the EggsDAO team on <a href="https://twitter.com/eggsdao" className="underline" target="_blank" rel="noreferrer">Twitter</a> and <a href="https://discord.gg/twittereggs" className="underline" target="_blank" rel="noreferrer">Discord.</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default About
