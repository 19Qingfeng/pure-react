import hasOwnProperty from 'shared/hasOwnProperty';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';

const hasValidKey = (config) => typeof config?.key !== 'undefined';

const hasValidRef = (config) => typeof config?.ref !== 'undefined';

/**
 * 保留属性
 */
const RESERVED_PROPS = {
  ref: true,
  key: true,
  __self: true,
  __source: true,
};

/**
 * 创建虚拟 DOM
 * @param {*} type 节点类型
 * @param {*} key Dom Diff Key
 * @param {*} ref 获取Dom节点
 * @param {*} props 属性
 * @returns
 */
const ReactElement = (type, key, ref, props) => {
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
  };
};

/**
 * 17之后替换的 React.createElement 编译运行时
 * see:https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAJgSwDcZgEBDCCAOTNQwCIxa56A-ACUQRGwAdWA6iABOCXAEJsAen7SChVkA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.20.11&externalPlugins=&assumptions=%7B%7D
 */
/**
 * 新版 JSX 运行时函数
 * @param {*} type 节点类型
 * @param {*} config 节点配置选项
 */
const jsxDEV = (type, config) => {
  // 属性名
  let propsName;
  // 属性对象
  const props = {};
  // 节点 key
  let key = null;
  // ref
  let ref = null;
  if (hasValidKey(config)) {
    key = config.key;
  }
  if (hasValidRef(config)) {
    ref = config.ref;
  }
  for (propsName in config) {
    if (
      hasOwnProperty.call(config, propsName) &&
      !RESERVED_PROPS.hasOwnProperty(propsName)
    ) {
      props[propsName] = config[propsName];
    }
  }
  return ReactElement(type, key, ref, props);
};

export { jsxDEV };
