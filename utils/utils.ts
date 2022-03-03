import { utils, BigNumber } from "ethers";

export function formatDecimal(reward: number, commify=true, places=2): string {
  if (!reward) {
    return '0';
  }
  let re = new RegExp(`(\\d+\\.\\d{${places}})(\\d)`),
  m = reward.toString().match(re);

  if (isNaN(reward)) {
    return '0';
  }

  if (commify) {
    return utils.commify(m ? parseFloat(m[1]).toString() : reward.valueOf().toString());
  }

  return m ? parseFloat(m[1]).toString() : reward.valueOf().toString();
}

export function formatBigNumber(
  amount: BigNumber,
  decimals: number,
  precision: number = 5
): number {
  if (!amount) {
    return 0;
  }
  let str = utils.formatUnits(amount, decimals);
  let split = str.split('.');

  if (split.length === 2) {
    split[1] = split[1].slice(0, precision);
  }
  return parseFloat(split.join('.'));
}
