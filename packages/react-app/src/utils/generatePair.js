import IUniswapV2Factory from '@uniswap/v2-core/build/IUniswapV2Factory.json';
import { Contract } from "@ethersproject/contracts";
const uniswapV2FactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

export async function checkForPair(signer, token0, token1, setErrorMessage) {

  const token0Address = token0;
  const token1Address = token1;

  const uniswapV2Factory = new Contract(
    uniswapV2FactoryAddress,
    IUniswapV2Factory.abi,
    signer
  );

  const pairCreatorAsUser = uniswapV2Factory.connect(signer);
  // check if the pair already exists (note: tokens can be in any order)
  let pair;
  try {
    pair = await pairCreatorAsUser.functions.getPair(token0Address, token1Address);
    // note: if returned value is "0x0000000000000000000000000000000000000000" then pair does not exist
  } catch (e) {
    setErrorMessage(e.message);
  }
  return pair;
}

export async function createPair(signer, token0, token1, setErrorMessage) {
  const token0Address = token0;
  const token1Address = token1;

  const uniswapV2Factory = new Contract(
    uniswapV2FactoryAddress,
    IUniswapV2Factory.abi,
    signer,
  );

  const pairCreatorAsUser = uniswapV2Factory.connect(signer);
  // createPair if the pair does not exist in the UniswapV2Factory
  let pair;
  try {
    const receipt = await pairCreatorAsUser.functions
      .createPair(token0Address, token1Address, {
        gasLimit: 8000000,
      })
      .then((tx) => tx.wait());
    const events = receipt.events;
    const pairCreationEvent = events.find((event) => event.event === 'PairCreated');
    if (pairCreationEvent) {
      pair = pairCreationEvent.args[2];
    }
  } catch(e){
    setErrorMessage(e.message);
  }
  return pair;
}