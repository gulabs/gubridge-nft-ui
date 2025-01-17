export const GUSANDBOX_GOERLI_DEV_BRIDGE = 'gusandbox-goerli-dev';
export const GUSANDBOX_GOERLI_TEST_BRIDGE = 'gusandbox-goerli-test';
export const GUSANDBOX_GOERLI_STAGE_BRIDGE = 'gusandbox-goerli-stage';
export const JOC_ETHEREUM_BRIDGE = 'joc-ethereum';

const GUSANDBOX_GOERLI_BRIDGE_DEV_CONFIG = {
  label: 'G.U.Sandbox⥊Görli',
  homeChainId: 99999,
  foreignChainId: 5,
  foreignMediatorAddress:
    '0xB9f181f0154808c62A600d35217Be79F677FC5b8'.toLowerCase(),
  homeMediatorAddress:
    '0x84B67EBa0362cD118A2Fe1c8ad5173ACc781B371'.toLowerCase(),
  foreignAmbAddress: '0x0F806D8dd8bb02Ad9dd9bA0e8e351B4319cc45e4'.toLowerCase(),
  homeAmbAddress: '0xc39eAbae09273F00Ec7e56B6a8C189437a61C9C8'.toLowerCase(),
  ambLiveMonitorPrefix: 'http://alm.dev.nft-bridge.gu.net',
  foreignBridgeSubgraph: 'cuonghx1108/goerli-gusandbox-nft-dev',
  homeBridgeSubgraph: 'cuonghx1108/gusandbox-goerli-nft-dev',
  home721Subgraph: 'cuonghx1108/gu-bridge-eip721-dev-1',
  foreign721Subgraph: 'cuonghx1108/gu-bridge-eip721-dev-1',
  home1155Subgraph: 'gulabs/erc1155-subgraph',
  foreign1155Subgraph: 'cuonghx1108/eip1155-goerli',
  claimDisabled: false,
  tokensClaimDisabled: [],
  tokenFactoryAddress: '0x3fD323734104Bf4FdE0E60E620B94051787F14A3',
};

const GUSANDBOX_GOERLI_BRIDGE_TEST_CONFIG = {
  label: 'G.U.Sandbox⥊Görli',
  homeChainId: 99999,
  foreignChainId: 5,
  foreignMediatorAddress:
    '0x29fe06459E15426704C3c58F849d74aB3f7F636c'.toLowerCase(),
  homeMediatorAddress:
    '0x002FDE085C6cc481C16d4929034eEEd6B6486Cac'.toLowerCase(),
  foreignAmbAddress: '0x3Bc43B44FB8ab97a75b080D1B05c2439A98788B4'.toLowerCase(),
  homeAmbAddress: '0xbD6D4E96e34546473c62C49D12a4B2EAdc55235A'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://alm.test.nft-bridge.gu.net',
  foreignBridgeSubgraph: 'cuonghx1108/goerli-gu-nft-test-1',
  homeBridgeSubgraph: 'cuonghx/gusandbox-goerli-omnibridge-nft-test-1',
  home721Subgraph: 'cuonghx1108/gu-bridge-eip721-test',
  foreign721Subgraph: 'cuonghx1108/gu-bridge-eip721-test-1',
  home1155Subgraph: 'gulabs/erc1155-subgraph',
  foreign1155Subgraph: 'cuonghx1108/eip1155-goerli',
  claimDisabled: false,
  tokensClaimDisabled: [],
  tokenFactoryAddress: '0xcBcEB313701faA8Bd102D9fa34cbf4D8b5fCcfbD',
};

const GUSANDBOX_GOERLI_BRIDGE_STAGE_CONFIG = {
  label: 'G.U.Sandbox⥊Görli',
  homeChainId: 99999,
  foreignChainId: 5,
  foreignMediatorAddress:
    '0x6DCCf3ffdD865A845DBaE5383d72E1B85a6013A7'.toLowerCase(),
  homeMediatorAddress:
    '0x9673b8774818DeDDe56F664bD7c6d48Cd90de2c5'.toLowerCase(),
  foreignAmbAddress: '0xd1cda03Dc71DbccD32801770eEa4d6e4fe833691'.toLowerCase(),
  homeAmbAddress: '0xCc1C5f822dCFBF0DD98a442FeDB7b44062f5cb71'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://alm.stage.nft-bridge.gu.net',
  foreignBridgeSubgraph: 'kumikotamura/gu-nft-subgraph-staging',
  homeBridgeSubgraph: 'kumikotamura/gu-nft-subgraph-staging',
  home721Subgraph: 'kumikotamura/gu-nft-eip721-staging-v2',
  foreign721Subgraph: 'kumikotamura/gu-nft-eip721-staging-v2',
  home1155Subgraph: '',
  foreign1155Subgraph: '',
  claimDisabled: false,
  tokensClaimDisabled: [],
  tokenFactoryAddress: '0x284fB7193f686f7c9d3Aa8E1Bb1B68e81C85C7A3',
};

const JOC_ETHEREUM_BRIDGE_CONFIG = {
  label: 'Japan Open Chain⥊Ethereum',
  homeChainId: 81,
  foreignChainId: 1,
  foreignMediatorAddress:
    '0x0617af609F19A8a3C7b2A1779C99DE1de62167E7'.toLowerCase(),
  homeMediatorAddress:
    '0xD29F62EDc919c1378248262392F1ffeb441a3e79'.toLowerCase(),
  foreignAmbAddress: '0x2deC96c28A6e991BAc485D2e191abB91da6F8148'.toLowerCase(),
  homeAmbAddress: '0x2deC96c28A6e991BAc485D2e191abB91da6F8148'.toLowerCase(),
  ambLiveMonitorPrefix: 'https://alm.nft-bridge.gu.net',
  foreignBridgeSubgraph: '23636/gubridge-joc-ethereum/v0.0.1',
  homeBridgeSubgraph: 'gulaps/gubridge-joc-ethereum',
  home721Subgraph: 'gulaps/gubridge-eip721',
  foreign721Subgraph: '23636/gubridge-eip721/v0.0.1',
  home1155Subgraph: '',
  foreign1155Subgraph: '',
  claimDisabled: false,
  tokensClaimDisabled: [],
  tokenFactoryAddress: '0x9C7c06b18066d73248e6FEa57CD0c1557D2cAbF1',
};

const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [GUSANDBOX_GOERLI_DEV_BRIDGE]: GUSANDBOX_GOERLI_BRIDGE_DEV_CONFIG,
  [GUSANDBOX_GOERLI_TEST_BRIDGE]: GUSANDBOX_GOERLI_BRIDGE_TEST_CONFIG,
  [GUSANDBOX_GOERLI_STAGE_BRIDGE]: GUSANDBOX_GOERLI_BRIDGE_STAGE_CONFIG,
  [JOC_ETHEREUM_BRIDGE]: JOC_ETHEREUM_BRIDGE_CONFIG,
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);
