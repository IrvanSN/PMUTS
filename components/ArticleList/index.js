import React, {Component} from 'react';
import {AspectRatio, Box, Heading, Stack} from "native-base";
import {Image, Text} from "react-native";
import {SmallButton} from "../index";

class ArticleList extends Component {
  render() {
    return (
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
                uri: this.props.imageURI
              }} alt="image" />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {this.props.title}
              </Heading>
              <Text fontSize="xs" _light={{
                color: "violet.500"
              }} _dark={{
                color: "violet.400"
              }} fontWeight="500" ml="-0.5" mt="-1">
                {this.props.date}
              </Text>
            </Stack>
            <SmallButton text="lihat selengkapnya" onPress={this.props.onPress}/>
          </Stack>
        </Box>
    );
  }
}

export default ArticleList;
