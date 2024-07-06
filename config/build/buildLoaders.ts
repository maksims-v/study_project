import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // порядок loader имеет значение

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  // если не используем ts, то тогда нужен babel-leader. А так ts loader уже умеет обрабытывать jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    // тут указывает loader который для этих файлов будет использоваться
    use: 'ts-loader',
    // исключаем nodemodelus
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
