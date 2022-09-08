import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class SmartController {
  @Get("lendingPoolRewards")
  getPoolRewards(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      success: true,
      data: {
        poolAPRs: [
          {
            tokenAddress: "0x2E9B46867469350E4889c280f74Bfa55Ca44fcd4",
            apy: 0.06486825637993174,
            poolValue: 28059306.50912,
            poolRewardsPerYear: 36412670.557611935,
            assetPrice: 1,
            allocPoint: "6",
          },
          {
            tokenAddress: "0x5293c6CA56b8941040b8D18f557dFA82cF520216",
            apy: 0.03240816571349172,
            poolValue: 37442380.09988,
            poolRewardsPerYear: 24275113.705074623,
            assetPrice: 1,
            allocPoint: "4",
          },
          {
            tokenAddress: "0x4e75D4bc81D9AD1a1abc972a3dd53d581e1CE16b",
            apy: 0.25846673670243386,
            poolValue: 7042137.459150827,
            poolRewardsPerYear: 36412670.557611935,
            assetPrice: 1564.5589540302462,
            allocPoint: "6",
          },
          {
            tokenAddress: "0x15b53d277Af860f51c3E6843F8075007026BBb3a",
            apy: 0.06116752884717501,
            poolValue: 14878468.386587,
            poolRewardsPerYear: 18206335.278805967,
            assetPrice: 1564.5589540302462,
            allocPoint: "3",
          },
          {
            tokenAddress: "0x0e16bAE17C61789d8a96Ea6529d788B633C4c8B6",
            apy: 0.19755391683190351,
            poolValue: 3071158.6954182177,
            poolRewardsPerYear: 12137556.852537312,
            assetPrice: 18859.500087680277,
            allocPoint: "2",
          },
          {
            tokenAddress: "0x4cD44E6fCfA68bf797c65889c74B26b8C2e5d4d3",
            apy: 0.04828840240106683,
            poolValue: 6282247.9034719905,
            poolRewardsPerYear: 6068778.426268656,
            assetPrice: 18859.500087680277,
            allocPoint: "1",
          },
          {
            tokenAddress: "0x9C3A8644A9cA181b90094be98dC19496F6b38a24",
            apy: 0.05888077042617912,
            poolValue: 61825219.85709,
            poolRewardsPerYear: 72825341.11522387,
            assetPrice: 1,
            allocPoint: "12",
          },
          {
            tokenAddress: "0xEf47CCC71EC8941B67DC679D1a5f78fACfD0ec3C",
            apy: 0.030575236363161288,
            poolValue: 79373964.24817,
            poolRewardsPerYear: 48550227.41014925,
            assetPrice: 1,
            allocPoint: "8",
          },
          {
            tokenAddress: "0xf92d501e74bd1e4308E6676C38Ab4d84389d7Bf3",
            apy: 0.06778852590488484,
            poolValue: 67126341.22737,
            poolRewardsPerYear: 91031676.39402986,
            assetPrice: 1,
            allocPoint: "15",
          },
          {
            tokenAddress: "0x805ba50001779CeD4f59CfF63aea527D12B94829",
            apy: 0.033535093013874084,
            poolValue: 90460376.72256,
            poolRewardsPerYear: 60687784.262686566,
            assetPrice: 1,
            allocPoint: "10",
          },
        ],
      },
      generatedAt: 1662545678343,
    });
  }

  @Get("dailyFees")
  getDailyFees(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      success: true,
      data: {
        totalPlatformFees: 3151600.2472850783,
        asset: {
          RDNT: 65.40245646622121,
          rWBTC: 1.5236579476966412,
          rDAI: 7.712260403366582,
          rUSDT: 9.333214855576589,
          rUSDC: 11.036587876036469,
          rWETH: 4.9918224511024984,
        },
      },
      generatedAt: 1662562208946,
    });
  }

  @Get("pool2info")
  getPoolInfo(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      success: true,
      data: {
        lpTokenPrice: 17.790701976950096,
        pool2RewardsPerSecond: 0.7367693714285714,
        yearlyRewardsUSD: 1161434.6967739009,
        totalLpStaked: 45483.71121670846,
        totalLpStakedUSD: 809187.1510621225,
        apr: 1.4353103546558115,
      },
      generatedAt: 1662562188225,
    });
  }

  @Get("StakingRewards")
  getStakingRewards(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      success: true,
      data: {
        platformFeesPerSecondUSD: 0.1757561513933855,
        penaltyFeesPerSecondUSD: 0.23834488652118235,
        totalRevenuePerSecondUSD: 0.41410103791456787,
        totalPlatformFees: 35778.32967581866,
        asset: {
          RDNT: 57.55718162927056,
          rWBTC: 0.99590219098067,
          rDAI: 6.180923971681347,
          rUSDT: 15.558368038523115,
          rUSDC: 16.94973599088577,
          rWETH: 2.7578881786585394,
        },
        stakingAPR: 0,
        lockingAPR: 3.5199404095961335,
        rewardTokens: [
          {
            symbol: "DAI",
            decimals: 18,
            price: 1,
            rToken: "0x5293c6CA56b8941040b8D18f557dFA82cF520216",
          },
          {
            symbol: "WETH",
            decimals: 18,
            price: 1629.8832311636493,
            rToken: "0x15b53d277Af860f51c3E6843F8075007026BBb3a",
          },
          {
            symbol: "WBTC",
            decimals: 8,
            price: 19280.62547645678,
            rToken: "0x4cD44E6fCfA68bf797c65889c74B26b8C2e5d4d3",
          },
          {
            symbol: "USDT",
            decimals: 6,
            price: 1,
            rToken: "0xEf47CCC71EC8941B67DC679D1a5f78fACfD0ec3C",
          },
          {
            symbol: "USDC",
            decimals: 6,
            price: 1,
            rToken: "0x805ba50001779CeD4f59CfF63aea527D12B94829",
          },
          { symbol: "RDNT", decimals: 18, price: 0.052995655466550134 },
        ],
        lockingAPRPerToken: {
          RDNT: 2.025978494793337,
          rWBTC: 0.03505516366038187,
          rDAI: 0.21756484056562603,
          rUSDT: 0.5476452836616644,
          rUSDC: 0.5966206064630479,
          rWETH: 0.09707602045207674,
        },
      },
      generatedAt: 1662609898914,
    });
  }
}
