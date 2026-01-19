export type AssetType = 'icons' | 'images';

const getAssetsContext = (type: AssetType) =>
  type === 'images'
    ? (require as any).context('./images', true, /\.(png|jpg|jpeg|gif|webp)$/)
    : (require as any).context('./icons', true, /\.svg$/);

export default getAssetsContext;