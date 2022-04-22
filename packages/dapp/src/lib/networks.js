export const ETH_XDAI_BRIDGE = 'eth-xdai';
export const RINKEBY_XDAI_BRIDGE = 'rinkeby-xdai';
export const KOVAN_SOKOL_BRIDGE = 'kovan-sokol';
export const GUSANDBOX_ROPSTEN_BRIDGE = 'gusandbox-ropsten';
export const GUSANDBOX_RINKEBY_BRIDGE = 'gusandbox-rinkeby';

const ETH_XDAI_BRIDGE_CONFIG = {
  label: 'eth⥊xdai',
  homeChainId: 100,
  foreignChainId: 1,
  foreignMediatorAddress:
    '0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480'.toLowerCase(),
  homeMediatorAddress:
    '0x80199C8D04Af4c5cEB532adF4463b18BB4B59ffC'.toLowerCase(),
  foreignAmbAddress: '0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e'.toLowerCase(),
  homeAmbAddress: '0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://alm-xdai.herokuapp.com',
  foreignBridgeSubgraph: 'dan13ram/mainnet-xdai-omnibridge-nft',
  homeBridgeSubgraph: 'dan13ram/xdai-mainnet-omnibridge-nft',
  home721Subgraph: 'sunguru98/erc721-xdai-subgraph',
  foreign721Subgraph: 'wighawag/eip721-subgraph',
  home1155Subgraph: 'sunguru98/erc1155-xdai-subgraph',
  foreign1155Subgraph: 'alexvorobiov/eip1155subgraph',
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const RINKEBY_XDAI_BRIDGE_CONFIG = {
  label: 'rinkeby⥊xdai',
  homeChainId: 100,
  foreignChainId: 4,
  foreignMediatorAddress:
    '0xEc05e3f4D845f0E39e33146395aCE5D35c01Fcc0'.toLowerCase(),
  homeMediatorAddress:
    '0x2c0bF58cC87763783e35a625ff6a3e50d9E05337'.toLowerCase(),
  foreignAmbAddress: '0xD4075FB57fCf038bFc702c915Ef9592534bED5c1'.toLowerCase(),
  homeAmbAddress: '0xc38D4991c951fE8BCE1a12bEef2046eF36b0FA4A'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://alm-rinkeby.herokuapp.com',
  foreignBridgeSubgraph: 'dan13ram/rinkeby-xdai-omnibridge-nft',
  homeBridgeSubgraph: 'dan13ram/xdai-rinkeby-omnibridge-nft',
  home721Subgraph: 'sunguru98/erc721-xdai-subgraph',
  foreign721Subgraph: 'daisai3/eip721_rinkeby',
  home1155Subgraph: 'sunguru98/erc1155-xdai-subgraph',
  foreign1155Subgraph: 'sunguru98/erc1155-rinkeby-subgraph',
  claimDisabled: true,
  tokensClaimDisabled: [],
};

const KOVAN_SOKOL_BRIDGE_CONFIG = {
  label: 'kovan⥊sokol',
  homeChainId: 77,
  foreignChainId: 42,
  foreignMediatorAddress:
    '0x63be59CF177cA9bb317DE8C4aa965Ddda93CB9d7'.toLowerCase(),
  homeMediatorAddress:
    '0x3ecEe2667f80fc0858437119621b820efc6b0Ede'.toLowerCase(),
  foreignAmbAddress: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560'.toLowerCase(),
  homeAmbAddress: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://alm-test-amb.herokuapp.com',
  foreignBridgeSubgraph: 'dan13ram/kovan-sokol-omnibridge-nft',
  homeBridgeSubgraph: 'dan13ram/sokol-kovan-omnibridge-nft',
  home721Subgraph: 'dan13ram/erc721-sokol-subgraph',
  foreign721Subgraph: 'sunguru98/erc721-kovan-subgraph',
  home1155Subgraph: 'sunguru98/erc1155-sokol-subgraph',
  foreign1155Subgraph: 'sunguru98/erc1155-kovan-subgraph',
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const GUSANDBOX_ROPSTEN_BRIDGE_CONFIG = {
  label: 'gusandbox⥊ropsten',
  homeChainId: 99999,
  foreignChainId: 3,
  foreignMediatorAddress:
    '0xeCfB0BBA39dB555E566119919795f80aCD3f735f'.toLowerCase(),
  homeMediatorAddress:
    '0x29AEF4bb7fA5d1DC680BF88bB44f5b7821380FB6'.toLowerCase(),
  foreignAmbAddress: '0xF1b5cc67c911F67cCC4021C22241AC7c21CB43C8'.toLowerCase(),
  homeAmbAddress: '0x55af7F974F6B294034000Bb46c6359C5c605B62A'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://tokenbridge-alm.vercel.app',
  foreignBridgeSubgraph: 'cuonghx-gutech/ropsten-token-bridge-nft',
  homeBridgeSubgraph: 'cuonghx-gutech/gusandbox-ropsten-nft',
  home721Subgraph: 'cuonghx-gutech/erc721-gusandbox',
  foreign721Subgraph: 'cuonghx-gutech/erc721-ropsten',
  home1155Subgraph: 'cuonghx-gutech/erc1155-gusandbox',
  foreign1155Subgraph: 'cuonghx-gutech/erc1155-ropsten',
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const GUSANDBOX_RINKEBY_BRIDGE_CONFIG = {
  label: 'gusandbox⥊rinkeby',
  homeChainId: 99999,
  foreignChainId: 4,
  foreignMediatorAddress:
    '0xe6de6395d55dE9129Ae4b20f11Fc25A37B73efAD'.toLowerCase(),
  homeMediatorAddress:
    '0xFB25A90c3749fB4f30b36c4AE37b9EEe412fc35f'.toLowerCase(),
  foreignAmbAddress: '0x0F806D8dd8bb02Ad9dd9bA0e8e351B4319cc45e4'.toLowerCase(),
  homeAmbAddress: '0xDf1949Fd97c3d484D39269cCd11082d0Ac1f9440'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://tokenbridge-alm.vercel.app',
  foreignBridgeSubgraph: 'cuonghx-gutech/rinkeby-token-bridge-nft',
  homeBridgeSubgraph: 'cuonghx-gutech/gusandbox-rinkeby-nft',
  home721Subgraph: 'cuonghx-gutech/erc721-gusandbox',
  foreign721Subgraph: 'daisai3/eip721_rinkeby',
  home1155Subgraph: 'cuonghx-gutech/erc1155-gusandbox',
  foreign1155Subgraph: 'sunguru98/erc1155-rinkeby-subgraph',
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [ETH_XDAI_BRIDGE]: ETH_XDAI_BRIDGE_CONFIG,
  [RINKEBY_XDAI_BRIDGE]: RINKEBY_XDAI_BRIDGE_CONFIG,
  [KOVAN_SOKOL_BRIDGE]: KOVAN_SOKOL_BRIDGE_CONFIG,
  [GUSANDBOX_ROPSTEN_BRIDGE]: GUSANDBOX_ROPSTEN_BRIDGE_CONFIG,
  [GUSANDBOX_RINKEBY_BRIDGE]: GUSANDBOX_RINKEBY_BRIDGE_CONFIG,
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);
