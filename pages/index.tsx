import React, { ReactNode, useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEthers, useContractFunction } from '@usedapp/core';
import { Contract  } from '@ethersproject/contracts';
import { utils } from 'ethers';
import { formatDecimal } from '../utils/utils';
import { useWeb3Modal, useActiveChain } from '../hooks';


interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick, ...props }) => {
  return (
    <button
      className="bg-white px-10 py-4 rounded-full text-blue-700 cursor-pointer font-bold tracking-wide disabled:opacity-50 disabled:cursor-default"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface MintingTiersProps {
  choices: any;
  selected: number;
  onChoice: (choice: number) => void;
}

const MintingTiers: React.FC<MintingTiersProps> = ({ choices, selected, onChoice, ...props }) => {
  return (
    <div className="my-4 flex justify-between pr-16">
      {choices[0].map((choice: number, i: number) => (
        <span
          key={choice}
          className={`bg-white rounded-full text-blue-700 font-bold px-8 py-3 ${selected === choice ? 'cursor-default' : 'opacity-50 cursor-pointer'}`}
          onClick={() => {
            onChoice(choice);
          }}
        >
          {`${choices[1][i]} (${choice}Ξ)`}
        </span>
      ))}
    </div>
  );
}

interface InputProps {
  placeholder: string;
  value: number|string;
  onChange: (value: number) => void;
  id: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, id, onChange, ...props }) => {
  return (
    <>
      <div>
        <label htmlFor={id} className="text-white">
          {placeholder}
        </label>
      </div>
      <div>
        <input
          id={id}
          type="number"
          className="px-4 py-3 rounded-md mt-1 mr-2"
          value={value === 0 ? '' : value}
          placeholder={placeholder}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (value && value > 0) {
              onChange(value);
            } else {
              onChange(0);
            }
          }}
        />
      </div>
    </>
  );
}

function buildMintButtonLabel(amount: number, donation: number, tier: number) {
  if (amount === 0) {
    return "Mint Eggs"
  }
  let egg = "Eggs";
  
  if (amount === 1) {
    egg = "Egg";
  }

  const totalCost = formatDecimal((donation * 100000 + (amount * tier) * 100000) / 100000, false, 2);

  return `Mint ${amount} ${egg} for ${totalCost}Ξ`;
}

const eggsUkraine = new Contract(process.env.NEXT_PUBLIC_DEPLOYED_ADDRESS || '', [
  "function mint(uint256, uint256) external payable",
])

const Home: NextPage = () => {
  const [imgSrc, setImgSrc] = useState<string>("/eggsforukraine_silver.png");
  const [selected, setSelected] = useState<number>(0.02);
  const [amount, setAmount] = useState<number>(1);
  const [donation, setDonation] = useState<number>(0);
  const { account  } = useEthers();                                                                        
  const openWeb3Modal = useWeb3Modal();
  const { currentChain, wrongChain } = useActiveChain();
  const mint = useContractFunction(eggsUkraine, "mint", { transactionName: "mint"  });

  return (
    <div className="">
      <Head>
        <title>Eggs For Ukraine</title>
        <meta name="description" content="EggsDAO Minting for Ukraine" />
      </Head>
      <div className="background-image"></div>

      <main className="container mx-auto pt-6 z-10 relative">
        <div className="md:flex">
          <div className="w-full md:w-7/12 flex justify-center items-center px-6 md:px-0">
            <div className="max-w-full">
              <h1 className="text-white text-7xl tracking-wide font-bold">
                EGGS FOR UKRAINE
              </h1>
              <h2 className="text-white text-xl tracking-wide mt-4">
                Buy an egg and be entered to win a real TwitterEgg NFT donated by <a href="https://twitter.com/eggsdao" className="font-bold underline" target="_blank" rel="noreferrer">EggsDAO</a> as well as many more prizes donated by some <Link href="/projects"><span className="underline cursor-pointer text-xl">amazing projects.</span></Link>
              </h2>
              { account ? (
                <>
                  <div className="mt-5 text-white">
                    <p className="font-bold text-lg">
                    Every 0.02 contributed = 1 entry to the raffle. More mints = More chances to win
                    </p>
                    <MintingTiers
                      selected={selected}
                      choices={[[0.02, 0.2, 1], ["Silver", "Gold", "Legendary"]]}
                      onChoice={(choice: number) => {
                        if (choice === 0.02) {
                          setImgSrc("/eggsforukraine_silver.png");
                        } else if (choice === 0.2) {
                          setImgSrc("/eggsforukraine_gold.png");
                        } else if (choice === 1) {
                          setImgSrc("/eggsforukraine_legendary.png");
                        }
                        setSelected(choice);
                      }}
                    />
                  </div>
                  <div className="mt-8 text-white text-md">
                    You can additionally choose to donate more eth on top of your mint. 100% raised will go <Link href="/faq"><span className="cursor-pointer underline font-bold">towards helping Ukraine.</span></Link> Each EggForUkraine holder will be able vote where funds go after mint.
                  </div>

                  <div className="mt-7 mb-8 sm:flex justify-between">
                    <div className="">
                      <Input
                        id="mint-amount"
                        value={amount}
                        placeholder="NFTs to mint"
                        onChange={(value: number) => {
                          setAmount(value);
                        }}
                      />
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <Input
                        id="additiona-donation"
                        value={donation}
                        placeholder="Additional Donation"
                        onChange={(value: number) => {
                          setDonation(value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="">
                    <Button
                      disabled={amount === 0}
                      onClick={() => {
                        let tier = 0;
                        if (selected === 0.2) {
                          tier = 1;
                        } else if (selected === 1) {
                          tier = 2;
                        }
                        const value = (donation * 100000 + (amount * selected) * 100000) / 100000;
                        mint.send(tier, amount, { value: utils.parseEther(value.toString()) });
                      }}
                    >
                      {`${buildMintButtonLabel(amount, donation, selected)}`}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-5 text-white">
                    <Button
                      onClick={openWeb3Modal}
                    >
                      Mint
                    </Button>
                  </div>
                </>
              ) }
            </div>
          </div>
          <div className="w-7/12 mx-auto md:w-5/12 mt-12 md:mt-0">
            <div className="md:pl-24">
              <img src={imgSrc} alt="Egg For Ukraine" className="w-full" />
            </div>
          </div>
        </div>
        <h2 className="mt-24 text-4xl font-bold text-white block text-center">Raffle Prizes</h2>
        <div className="text-white md:w-1/2 mx-auto px-4">
          <p className="mt-4">Over 100 eth of prizes have been donated to the cause. Every 0.02 spent on minting / donating to EggsForUkraine will get 1 entry into the raffle.</p>
          <p className="mt-4 text-xl font-bold">Total value: 117.02Ξ</p>
          <p className="mt-4">These are the prizes on offer:</p>
          <ul className="mt-4 list-disc list-inside">
            <li>Experience #28 by Laith Safa - Floor: <strong>1.5Ξ</strong></li>
            <li>TwitterEgg (Grey, 2015) - Floor: <strong>30Ξ</strong></li>
            <li>Misprint TwitterEgg - Floor: <strong>60Ξ</strong></li>
            <li>6x Namecoin NFTs - Combined Floor: <strong>6Ξ</strong></li>
            <li>Aether City Unit - Floor: <strong>1Ξ</strong></li>
            <li>9x LONDON EMBERS by POB - Floor: <strong>0.45Ξ</strong></li>
            <li>WVRP #957 - Floor: <strong>0.4Ξ</strong></li>
            <li>UMBRELLA | Nov 2014 - Floor: <strong>2.8Ξ</strong></li>
            <li>Ethereal Ape #416 - Floor: <strong>0.1Ξ</strong></li>
            <li>SATOSHILITE - Spells of Genesis (2016) - Floor: <strong>3.5Ξ</strong></li>
            <li>MTM Series – 2016 Music NFTs - Floor: <strong>1Ξ</strong></li>
            <li>PixelMap Tile #1406 - Floor: <strong>1.75Ξ</strong></li>
            <li>OCM Dessert: D1 Incredible Ice Pop - Floor: <strong>0.6Ξ</strong></li>
            <li>3D Somnium Avatar by R00T and Blake Hotz - Floor: <strong>1Ξ</strong></li>
            <li>Derage - Floor: <strong>0.1Ξ</strong></li>
            <li>Norte by Sep (CryptoArte) - Floor: <strong>0.075Ξ</strong></li>
            <li>3x Cryptocards - Combined Floor: <strong>0.4Ξ</strong></li>
            <li>10x NFT2040 - Combined Floor: <strong>3.5Ξ</strong></li>
            <li>ALPACADABRAZ - Floor: <strong>0.2Ξ</strong></li>
            <li>Meta Legend - Floor: <strong>0.16Ξ</strong></li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
