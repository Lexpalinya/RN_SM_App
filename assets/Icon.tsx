import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export function TablerHome(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke={props.color || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
      </G>
    </Svg>
  );
}

export function TablerHomeFilled(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"
      />
    </Svg>
  );
}

export function FluentChartPerson24Filled(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M12.5 2.75a.75.75 0 0 0-1.5 0V3H5.25A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19h2.398l-1.475 1.77a.75.75 0 0 0 1.153.96L9.6 19h3.508c.334-1.156 1.4-2 2.664-2h.277A3.5 3.5 0 1 1 22 14.5V6.25A3.25 3.25 0 0 0 18.75 3H12.5zm-6.5 5A.75.75 0 0 1 6.75 7h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 6 7.75M6.75 10h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m0 3h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5M21 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function FluentChartPerson24Regular(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M12.5 2.75a.75.75 0 0 0-1.5 0V3H5.25A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19h2.398l-1.475 1.77a.75.75 0 0 0 1.153.96L9.6 19h3.508a2.78 2.78 0 0 1 1.075-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v5.377A3.5 3.5 0 0 1 22 14.5V6.25A3.25 3.25 0 0 0 18.75 3H12.5zm-6.5 5A.75.75 0 0 1 6.75 7h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 6 7.75M6.75 10a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 13.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m15 .75a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function SolarBellLinear(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G fill="none" stroke="currentColor" strokeWidth={1.5}>
        <Path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></Path>
        <Path
          strokeLinecap="round"
          d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"></Path>
      </G>
    </Svg>
  );
}

export function SolarBellBold(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"></Path>
    </Svg>
  );
}

export function FluentEditPerson24Filled(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M15.891 3.048a3.578 3.578 0 1 1 5.061 5.06l-.892.893L15 3.94zM13.94 5.001L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l5.25-5.251a3.5 3.5 0 0 1 4.555-4.556l.193-.192zM20 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 20.431 20.714 22 17.5 22S13 20.437 13 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function FluentEditPerson24Regular(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M20.952 3.048a3.58 3.58 0 0 0-5.06 0L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l5.25-5.251a3.5 3.5 0 0 1-.198-1.923L7.94 19c-.21.21-.474.357-.763.426l-3.416.814l.813-3.416c.069-.29.217-.554.427-.764L15 6.06L17.94 9l-1.054 1.054a3.5 3.5 0 0 1 1.922.199l2.144-2.144a3.58 3.58 0 0 0 0-5.06m-4 1.06a2.078 2.078 0 1 1 2.94 2.94l-.892.89L16.06 5zM20 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 20.431 20.714 22 17.5 22S13 20.437 13 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></Path>
    </Svg>
  );
}

export function MdiPersonBadge(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M17 3h-3v3h-4V3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zM13 5h-2V1h2zm3 14H8v-1h8zm-4 2H8v-1h4z"></Path>
    </Svg>
  );
}

export function MdiPersonBadgeOutline(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.color || 'currentColor'}
        d="M17 3h-3v2h3v16H7V5h3V3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm0 3H8v-1h8zm-4 2H8v-1h4zm1-15h-2V1h2z"></Path>
    </Svg>
  );
}


export function MaterialSymbolsArrowBackIosRounded(props: SvgProps) {
  return (<Svg width={24} height={24} viewBox="0 0 24 24" {...props}><Path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"></Path></Svg>);
}