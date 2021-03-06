import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Image, ScrollView, Text
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components, LinearGradient, Video
} from 'expo';

// components
import ContentCoverSlider from '../../components/common/ContentCoverSlider';
import AvatarGroup from '../../components/common/AvatarGroup';
import Avatar from '../../components/common/Avatar';
import UppercasedText from '../../components/common/UppercasedText';
import GradientButton from '../../components/common/GradientButton';
import Tag from '../../components/common/Tag';
import * as Animatable from 'react-native-animatable';

export default class CompanyInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Facebook, Inc.'
          background={(
            <View style={styles.cover}>
              <Video
                isMuted
                isLooping
                shouldPlay
                ref='video'
                source={require('../../../res/vid/fb.mp4')}
                rate={1.0}
                resizeMode={Video.RESIZE_MODE_COVER}
                style={styles.cover} />
              <LinearGradient
                colors={[Colors.DarkTransparent, Colors.MenuBackground]}
                style={StyleSheet.absoluteFill} />
            </View>
          )}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[styles.header, styles.content]}>
              <View style={[Styles.Card, styles.summary]}>
                <Animatable.View
                  delay={300}
                  animation='bounceIn'>
                  <Image
                    source={{uri: 'https://image.freepik.com/free-vector/facebook-logo--vector--psd_286-2147488451.jpg'}}
                    style={styles.logo} />
                </Animatable.View>
                <UppercasedText style={[Styles.Text, Styles.Emphasized, styles.title]}>
                  Facebook, Inc.
                </UppercasedText>
                <Text style={[Styles.Text, styles.subtitle]}>
                  The world's social platform
                </Text>
              </View>
              <View style={styles.stats}>
                <GradientButton
                  label='?????? Following'
                  style={styles.followButton} />
                <AvatarGroup
                  uids={[1, 2, 3, 4, 5, 6]}
                  limit={6}
                  size={32}
                  backgroundColor={Colors.Background} />
                <Text style={[
                  Styles.Text, Styles.SmallText, styles.followers]}>
                  ?????? 33,482 ??????????????? Facebook, Inc.
                </Text>
              </View>
            </View>
            <View style={[styles.content, styles.bio]}>
              <UppercasedText style={[
                Styles.Text, Styles.SmallText, Styles.Emphasized, styles.sectionHeader]}>
                ???????????? Profile
              </UppercasedText>
              <Text style={[Styles.Text, styles.sectionText]}>
                Facebook???????????????thefacebook????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????face book???[6][7]???
              </Text>
              <Text style={[Styles.Text, styles.sectionText]}>
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.doc,.docx,.xls,.xlsx????????????.exe??????????????????????????????????????????????????????????????????????????????????????????????????????????????????Facebook??????2004???2???4?????????????????????????????????????????????????????????????????[8]???Facebook???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????MIT???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????13?????????????????????????????????Facebook??????????????????????????????13?????????????????????[9]???
              </Text>
            </View>
            <View style={[styles.content, styles.tags]}>
              <Tag outline color={Colors.Text} label='Social' />
              <Tag outline color={Colors.Text} label='App' />
              <Tag outline color={Colors.Text} label='Fortune 500' />
              <Tag outline color={Colors.Text} label='Tech' />
              <Tag outline label='Fastest growing of 2016' />
              <Tag fontColor={Colors.AlternateText} label='Top 10' />
              <Tag fontColor={Colors.AlternateText} label='Best of 2017' />
            </View>
            <View style={[styles.founders]}>
              <UppercasedText style={[
                Styles.Text, Styles.SmallText, Styles.Emphasized, Styles.Alternate, styles.sectionHeader, styles.foundersTitle]}>
                ???????????? Founders
              </UppercasedText>
              <ScrollView horizontal>
                <View style={styles.founder}>
                  <Avatar style={styles.founderAvatar} size={64} />
                  <Text style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                    Mark Zuckerberg
                  </Text>
                  <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.Subdued]}>
                    CEO, Founder
                  </UppercasedText>
                </View>
                <View style={styles.founder}>
                  <Avatar style={styles.founderAvatar} size={64} />
                  <Text style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                    Sheryl Sandberg
                  </Text>
                  <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.Subdued]}>
                    COO
                  </UppercasedText>
                </View>
                <View style={styles.founder}>
                  <Avatar style={styles.founderAvatar} size={64} />
                  <Text style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                    David Wehner
                  </Text>
                  <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.Subdued]}>
                    CFO
                  </UppercasedText>
                </View>
                <View style={styles.founder}>
                  <Avatar style={styles.founderAvatar} size={64} />
                  <Text style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                    Chris Cox
                  </Text>
                  <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.Subdued]}>
                    Chief Product Officer
                  </UppercasedText>
                </View>
                <View style={styles.founder}>
                  <Avatar style={styles.founderAvatar} size={64} />
                  <Text style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                    Mike Schroepfer
                  </Text>
                  <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.Subdued]}>
                    CTO, VP Engineering
                  </UppercasedText>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </ContentCoverSlider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Sizes.Height,
    backgroundColor: Colors.Background
  },

  logo: {
    width: Sizes.InnerFrame * 3,
    height: Sizes.InnerFrame * 3,
    backgroundColor: Colors.Facebook
  },

  cover: {
    height: Sizes.Height / 3
  },

  header: {
    marginTop: Sizes.Height / 3 - Sizes.OuterFrame * 2,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  content: {
    padding: Sizes.InnerFrame
  },

  summary: {
    flex: 2
  },

  stats: {
    flex: 3,
    alignItems: 'center',
    margin: Sizes.OuterFrame,
    marginRight: 0
  },

  followButton: {
    marginBottom: Sizes.InnerFrame,
    alignSelf: 'center'
  },

  title: {
    marginTop: Sizes.InnerFrame * 2
  },

  subtitle: {
    marginTop: Sizes.InnerFrame / 2
  },

  sectionHeader: {
    marginBottom: Sizes.InnerFrame / 2
  },

  sectionText: {
    marginBottom: Sizes.InnerFrame
  },

  bio: {
    backgroundColor: Colors.Foreground,
    padding: Sizes.OuterFrame + Sizes.InnerFrame,
    paddingBottom: 0
  },

  tags: {
    padding: Sizes.OuterFrame + Sizes.InnerFrame,
    paddingTop: Sizes.InnerFrame,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: Colors.Foreground
  },

  founders: {
    alignItems: 'flex-start',
    backgroundColor: Colors.MenuBackground
  },

  founder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizes.InnerFrame,
    margin: Sizes.InnerFrame,
    marginRight: 0,
    backgroundColor: Colors.Shadow
  },

  foundersTitle: {
    margin: Sizes.InnerFrame,
    marginBottom: 0
  },

  founderAvatar: {
    marginBottom: Sizes.InnerFrame / 2
  }
});
