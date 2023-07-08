/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Button, SvgIcon, Link as MUILink } from '@mui/material';
import { ReactComponent as DeleteFilled } from 'src/assets/images/_DeleteFilled.svg';
import { styled } from '@mui/material/styles';
import { PopOver2Props } from 'src/types';

const TypeQuest: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['Background']['Default'],
  boxShadow: `0px 6px 16px rgba(0, 0, 0, 0.17)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `238px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Content: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `30px 40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const IconFrame: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px 9px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Icon1: any = styled(SvgIcon)(({ theme }: any) => ({
  color: theme.palette['Error']['Main'],
  margin: `0px`,
}));

const Details: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px 0px 0px 14px`,
});

const DeleteItem: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['H6'].fontStyle,
  fontFamily: theme.typography['Typography']['H6'].fontFamily,
  fontWeight: theme.typography['Typography']['H6'].fontWeight,
  fontSize: theme.typography['Typography']['H6'].fontSize,
  letterSpacing: theme.typography['Typography']['H6'].letterSpacing,
  lineHeight: theme.typography['Typography']['H6'].lineHeight,
  textDecoration: theme.typography['Typography']['H6'].textDecoration,
  textTransform: theme.typography['Typography']['H6'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const AreYouSureYouWantToD: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Secondary'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
}));

const ThisActionCannotBeUn: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Error']['Main'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
}));

const Cta: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(0, 0, 0, 0.04)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `20px 40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Links: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  flex: `1`,
  margin: `0px`,
});

const Link1: any = styled(MUILink)(({ theme }: any) => ({
  color: theme.palette['Primary']['Main'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  margin: `0px 0px 0px 14px`,
}));

const ButtonContained: any = styled(Button)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px 0px 0px 14px`,
  color: theme.palette['Error']['Contrast'],
  fontStyle: theme.typography['Components']['Button Large'].fontStyle,
  fontFamily: theme.typography['Components']['Button Large'].fontFamily,
  fontWeight: theme.typography['Components']['Button Large'].fontWeight,
  fontSize: theme.typography['Components']['Button Large'].fontSize,
  letterSpacing: theme.typography['Components']['Button Large'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Large'].lineHeight,
  textDecoration: theme.typography['Components']['Button Large'].textDecoration,
  textTransform: theme.typography['Components']['Button Large'].textTransform,
}));

function PopOver2(props: PopOver2Props): JSX.Element {
  return (
    <TypeQuest className={props.className}>
      <Content>
        <IconFrame>
          <Icon1 fontSize={'medium'} component={DeleteFilled} />
        </IconFrame>
        <Details>
          <DeleteItem>{`Delete Item`}</DeleteItem>
          <AreYouSureYouWantToD>
            {`Are you sure you want to do this? `}
          </AreYouSureYouWantToD>
          <ThisActionCannotBeUn>
            {`This action cannot be undone.`}
          </ThisActionCannotBeUn>
        </Details>
      </Content>
      <Cta>
        <Links></Links>
        <Link1 href="#" underline="always">
          Cancel
        </Link1>
        <ButtonContained
          variant="contained"
          disabled={false}
          size={'large'}
          color={'error'}
        >
          {'DELETE'}
        </ButtonContained>
      </Cta>
    </TypeQuest>
  );
}

export default PopOver2;
