/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import {
  StyleSheet, View, Image,
} from 'react-native'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Colors, TextStyles } from '../../assets/styles'
import Text from './Text'

const ProductCardComponent = (props) => {
  const {
    imageSource, title, currentPrice, defaultPrice, saleOffvalue,
  } = props

  return (
    <View style={{
      width: 141,
      height: 238,
      padding: 16,
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.neutralLight,
      marginRight: 16,
    }}
    >
      <Image
        source={imageSource}
        style={{
          width: 109,
          height: 109,
          borderRadius: 5,
          marginBottom: 8,
        }}
        resizeMode="cover"
      />

      <Text style={{ ...TextStyles.heading6, color: Colors.neutralDark }} numberOfLines={2}>{title}</Text>
      <Text style={{ ...TextStyles.bodyNormalTextBold, color: Colors.primaryBlue, marginVertical: 8 }}>{currentPrice}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ ...TextStyles.captionNormalRegularLine, color: Colors.neutralGrey, marginRight: 8 }}>{defaultPrice}</Text>
        <Text style={{ ...TextStyles.captionNormalTextBold, color: Colors.primaryRed }}>{saleOffvalue}</Text>
      </View>
    </View>
  )
}

ProductCardComponent.propTypes = {
  imageSource: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  currentPrice: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired,
  saleOffvalue: PropTypes.string.isRequired,
}

export default ProductCardComponent
