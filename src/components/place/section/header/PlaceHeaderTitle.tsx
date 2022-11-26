import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { stylesSectionTitle } from "./styles";
import { RootState } from "../../../../state";

interface PlaceHeaderTitleProps {
  title: string;
}

const PlaceHeaderTitle = ({ title }: PlaceHeaderTitleProps) => {
  return <Text style={stylesSectionTitle.titleTxt}>{title}!</Text>;
};

const mapStateToProps = (state: RootState) => {
  return {
    title: state.loc.currentTitle,
  };
};

// export default PlaceHeaderTitle;
export default connect(mapStateToProps)(PlaceHeaderTitle);
