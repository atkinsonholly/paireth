import IUniswapV2Factory from '@uniswap/v2-core/build/IUniswapV2Factory.json';
import { Contract } from "@ethersproject/contracts";
// import { ethers, getUnnamedAccounts, getChainId } from '@nomiclabs/buidler';
const uniswapV2FactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

export async function checkForPair(signer, token0, token1) {
  // const others = await getUnnamedAccounts();
  // const deployer = others[0];
  // const currentChainId = await getChainId();

  const token0Address = token0;
  const token1Address = token1;

  const uniswapV2Factory = new Contract(
    uniswapV2FactoryAddress,
    IUniswapV2Factory.abi,
    signer
  );

  const pairCreatorAsUser = uniswapV2Factory.connect(signer);

  // check if the pair already exists (note: tokens can be in any order)
  // TODO: add error handling
  const pair = await pairCreatorAsUser.functions.getPair(token0Address, token1Address);

  // if (pair === "0x0000000000000000000000000000000000000000") then it does not exist
  return pair;
}

export async function createPair(signer, token0, token1) {
  // const others = await getUnnamedAccounts();
  // const deployer = others[0];
  // const currentChainId = await getChainId();

  const token0Address = token0;
  const token1Address = token1;

  const uniswapV2Factory = new Contract(
    uniswapV2FactoryAddress,
    IUniswapV2Factory.abi,
    signer,
  );

  const pairCreatorAsUser = uniswapV2Factory.connect(signer);

  // createPair if the pair does not exist in the UniswapV2Factory

  // TODO: add error handling
  const receipt = await pairCreatorAsUser.functions
    .createPair(token0Address, token1Address, {
      gasLimit: 8000000,
    })
    .then((tx) => tx.wait());

  const events = receipt.events;
  const pairCreationEvent = events.find((event) => event.event === 'PairCreated');
  const pair = pairCreationEvent.args[2];

  return pair;
}