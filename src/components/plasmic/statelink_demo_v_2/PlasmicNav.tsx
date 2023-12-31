// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aidk5hCMmGyuB8c7wzcfxE
// Component: YM9np3MJPfAp

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariants_3Jr0JmonLn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _3Jr0jmon_Ln/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_statelink_demo_v_2.module.css"; // plasmic-import: aidk5hCMmGyuB8c7wzcfxE/projectcss
import sty from "./PlasmicNav.module.css"; // plasmic-import: YM9np3MJPfAp/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: KMRH1MyS3RKv/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: v11bfmXXvSIp/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: ICS8wo8eg2rk/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: InRXIZB_Dyxl/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: AcH-nVT39fsD/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: 3ES35Gw_QcrW/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: s_MKYS3rEUCf/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: nstRhakN47s_/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: nfuqtvi0oc0g/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: VUyqFRmOnZ3r/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: gdFzTSd9Q1jH/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: ynA53ZBF4RhC/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: W5H8iBlXSEw5/icon
import image32F2NiF8ThhKv from "./images/image32.svg"; // plasmic-import: f2niF-8ThhKv/picture
import image43Fq71HQWldni from "./images/image43.svg"; // plasmic-import: fq71h_qWldni/picture

createPlasmicElementProxy;

export type PlasmicNav__VariantMembers = {
  collapsed: "collapsed";
};
export type PlasmicNav__VariantsArgs = {
  collapsed?: SingleBooleanChoiceArg<"collapsed">;
};
type VariantPropType = keyof PlasmicNav__VariantsArgs;
export const PlasmicNav__VariantProps = new Array<VariantPropType>("collapsed");

export type PlasmicNav__ArgsType = {};
type ArgPropType = keyof PlasmicNav__ArgsType;
export const PlasmicNav__ArgProps = new Array<ArgPropType>();

export type PlasmicNav__OverridesType = {
  root?: p.Flex<"div">;
  caretLeft?: p.Flex<"div">;
  ncdpiNextGenColor1?: p.Flex<"div">;
  card?: p.Flex<"div">;
  frame2988?: p.Flex<"div">;
  group3300?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  superAdmin?: p.Flex<"div">;
  frame1340?: p.Flex<"div">;
  ncdpiNextGenColor2?: p.Flex<"div">;
  image11?: p.Flex<"div">;
  socialMedia?: p.Flex<"div">;
  image24?: p.Flex<"div">;
  group3092?: p.Flex<"div">;
  image12?: p.Flex<"div">;
  doeStatePortal?: p.Flex<"div">;
  card2?: p.Flex<"div">;
  background?: p.Flex<"div">;
  frame?: p.Flex<"div">;
  frame1338?: p.Flex<"div">;
  sideNavBlocks4?: p.Flex<"div">;
  grid2Plus?: p.Flex<"div">;
  _7?: p.Flex<"div">;
  sideNavBlocks7?: p.Flex<"div">;
  grid2Plus2?: p.Flex<"div">;
  _12?: p.Flex<"div">;
  sideNavBlocks5?: p.Flex<"div">;
  _9?: p.Flex<"div">;
  sideNavBlocks6?: p.Flex<"div">;
  _11?: p.Flex<"div">;
  component24?: p.Flex<"div">;
  signOut?: p.Flex<"div">;
  _10?: p.Flex<"div">;
  sideNavBlocks2?: p.Flex<"div">;
  _5?: p.Flex<"div">;
  apps?: p.Flex<"div">;
  _4?: p.Flex<"div">;
  overview?: p.Flex<"div">;
  appList?: p.Flex<"div">;
  component18?: p.Flex<"div">;
  allUsers?: p.Flex<"div">;
  component19?: p.Flex<"div">;
  appUsage?: p.Flex<"div">;
  component20?: p.Flex<"div">;
  studentsStaff?: p.Flex<"div">;
  figmaPaste?: p.Flex<"div">;
  sideNavBlocks3?: p.Flex<"div">;
  dashboard?: p.Flex<"div">;
  _6?: p.Flex<"div">;
  component22?: p.Flex<"div">;
  dashboard2?: p.Flex<"div">;
  component21?: p.Flex<"div">;
  dashboard3?: p.Flex<"div">;
  _8?: p.Flex<"div">;
};

export interface DefaultNavProps {
  collapsed?: SingleBooleanChoiceArg<"collapsed">;
  className?: string;
}

const $$ = {};

function PlasmicNav__RenderFunc(props: {
  variants: PlasmicNav__VariantsArgs;
  args: PlasmicNav__ArgsType;
  overrides: PlasmicNav__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "collapsed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.collapsed
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3Jr0JmonLn()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootcollapsed]: hasVariant($state, "collapsed", "collapsed") }
      )}
    >
      <div
        data-plasmic-name={"caretLeft"}
        data-plasmic-override={overrides.caretLeft}
        className={classNames(projectcss.all, sty.caretLeft, {
          [sty.caretLeftcollapsed]: hasVariant($state, "collapsed", "collapsed")
        })}
        onClick={async event => {
          const $steps = {};

          $steps["updateCollapsed"] = true
            ? (() => {
                const actionArgs = {
                  vgroup: "collapsed",
                  operation: 2,
                  value: "collapsed"
                };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  const oldValue = p.get($state, vgroup);
                  p.set($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            typeof $steps["updateCollapsed"] === "object" &&
            typeof $steps["updateCollapsed"].then === "function"
          ) {
            $steps["updateCollapsed"] = await $steps["updateCollapsed"];
          }
        }}
      >
        <Icon14Icon
          className={classNames(projectcss.all, sty.svg__ryksk, {
            [sty.svgcollapsed__rykskUym1M]: hasVariant(
              $state,
              "collapsed",
              "collapsed"
            )
          })}
          role={"img"}
        />
      </div>
      <div
        data-plasmic-name={"ncdpiNextGenColor1"}
        data-plasmic-override={overrides.ncdpiNextGenColor1}
        className={classNames(projectcss.all, sty.ncdpiNextGenColor1, {
          [sty.ncdpiNextGenColor1collapsed]: hasVariant(
            $state,
            "collapsed",
            "collapsed"
          )
        })}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"card"}
        data-plasmic-override={overrides.card}
        hasGap={true}
        className={classNames(projectcss.all, sty.card)}
      >
        <div
          data-plasmic-name={"frame2988"}
          data-plasmic-override={overrides.frame2988}
          className={classNames(projectcss.all, sty.frame2988, {
            [sty.frame2988collapsed]: hasVariant(
              $state,
              "collapsed",
              "collapsed"
            )
          })}
        >
          <div
            data-plasmic-name={"group3300"}
            data-plasmic-override={overrides.group3300}
            className={classNames(projectcss.all, sty.group3300)}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ibpco, {
                [sty.imgcollapsed__ibpcoUym1M]: hasVariant(
                  $state,
                  "collapsed",
                  "collapsed"
                )
              })}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"40px"}
              loading={"lazy"}
              src={{
                src: image32F2NiF8ThhKv,
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1
              }}
            />
          </div>
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vomb1
              )}
            >
              {"Bob Cotes"}
            </div>
            <div
              data-plasmic-name={"superAdmin"}
              data-plasmic-override={overrides.superAdmin}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.superAdmin
              )}
            >
              {"Super Admin "}
            </div>
          </div>
          <Icon3Icon
            className={classNames(projectcss.all, sty.svg___4YVsB)}
            role={"img"}
          />
        </div>
      </p.Stack>
      {(hasVariant($state, "collapsed", "collapsed") ? true : false) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"frame1340"}
          data-plasmic-override={overrides.frame1340}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame1340, {
            [sty.frame1340collapsed]: hasVariant(
              $state,
              "collapsed",
              "collapsed"
            )
          })}
        >
          <div
            data-plasmic-name={"ncdpiNextGenColor2"}
            data-plasmic-override={overrides.ncdpiNextGenColor2}
            className={classNames(projectcss.all, sty.ncdpiNextGenColor2)}
          />

          {false ? (
            <div
              data-plasmic-name={"image11"}
              data-plasmic-override={overrides.image11}
              className={classNames(projectcss.all, sty.image11)}
            />
          ) : null}
          {false ? (
            <div
              data-plasmic-name={"socialMedia"}
              data-plasmic-override={overrides.socialMedia}
              className={classNames(projectcss.all, sty.socialMedia)}
            >
              <div
                data-plasmic-name={"image24"}
                data-plasmic-override={overrides.image24}
                className={classNames(projectcss.all, sty.image24)}
              />
            </div>
          ) : null}
          {false ? (
            <div
              data-plasmic-name={"group3092"}
              data-plasmic-override={overrides.group3092}
              className={classNames(projectcss.all, sty.group3092)}
            >
              <div
                data-plasmic-name={"image12"}
                data-plasmic-override={overrides.image12}
                className={classNames(projectcss.all, sty.image12)}
              />

              <div
                data-plasmic-name={"doeStatePortal"}
                data-plasmic-override={overrides.doeStatePortal}
                className={classNames(projectcss.all, sty.doeStatePortal)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__odmq0
                  )}
                >
                  {"DOE State Portal"}
                </div>
              </div>
            </div>
          ) : null}
          <p.Stack
            as={"div"}
            data-plasmic-name={"card2"}
            data-plasmic-override={overrides.card2}
            hasGap={true}
            className={classNames(projectcss.all, sty.card2)}
          >
            {false ? (
              <div
                data-plasmic-name={"background"}
                data-plasmic-override={overrides.background}
                className={classNames(projectcss.all, sty.background)}
              />
            ) : null}
            <div
              data-plasmic-name={"frame"}
              data-plasmic-override={overrides.frame}
              className={classNames(projectcss.all, sty.frame)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__c9Kh, {
                  [sty.imgcollapsed__c9KhUym1M]: hasVariant(
                    $state,
                    "collapsed",
                    "collapsed"
                  )
                })}
                displayHeight={"39px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"39px"}
                loading={"lazy"}
                src={{
                  src: image43Fq71HQWldni,
                  fullWidth: 145,
                  fullHeight: 150,
                  aspectRatio: 0.966667
                }}
              />
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame1338"}
            data-plasmic-override={overrides.frame1338}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame1338)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"sideNavBlocks4"}
              data-plasmic-override={overrides.sideNavBlocks4}
              hasGap={true}
              className={classNames(projectcss.all, sty.sideNavBlocks4)}
            >
              <div
                data-plasmic-name={"grid2Plus"}
                data-plasmic-override={overrides.grid2Plus}
                className={classNames(projectcss.all, sty.grid2Plus)}
              >
                <Icon16Icon
                  className={classNames(projectcss.all, sty.svg__dUDb, {
                    [sty.svgcollapsed__dUDbUym1M]: hasVariant(
                      $state,
                      "collapsed",
                      "collapsed"
                    )
                  })}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"_7"}
                data-plasmic-override={overrides._7}
                className={classNames(projectcss.all, sty._7)}
              >
                {false ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qj7Bv
                    )}
                  >
                    {"\uf078"}
                  </div>
                ) : null}
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sideNavBlocks7"}
              data-plasmic-override={overrides.sideNavBlocks7}
              hasGap={true}
              className={classNames(projectcss.all, sty.sideNavBlocks7, {
                [sty.sideNavBlocks7collapsed]: hasVariant(
                  $state,
                  "collapsed",
                  "collapsed"
                )
              })}
            >
              <div
                data-plasmic-name={"grid2Plus2"}
                data-plasmic-override={overrides.grid2Plus2}
                className={classNames(projectcss.all, sty.grid2Plus2)}
              >
                <Icon18Icon
                  className={classNames(projectcss.all, sty.svg__dnULc, {
                    [sty.svgcollapsed__dnULcUym1M]: hasVariant(
                      $state,
                      "collapsed",
                      "collapsed"
                    )
                  })}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"_12"}
                data-plasmic-override={overrides._12}
                className={classNames(projectcss.all, sty._12)}
              >
                {false ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7UJp9
                    )}
                  >
                    {"\uf078"}
                  </div>
                ) : null}
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sideNavBlocks5"}
              data-plasmic-override={overrides.sideNavBlocks5}
              hasGap={true}
              className={classNames(projectcss.all, sty.sideNavBlocks5)}
            >
              <div
                data-plasmic-name={"_9"}
                data-plasmic-override={overrides._9}
                className={classNames(projectcss.all, sty._9)}
              >
                {false ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mNm
                    )}
                  >
                    {"\uf078"}
                  </div>
                ) : null}
                <Icon17Icon
                  className={classNames(projectcss.all, sty.svg___6Affb, {
                    [sty.svgcollapsed___6Affbuym1M]: hasVariant(
                      $state,
                      "collapsed",
                      "collapsed"
                    )
                  })}
                  role={"img"}
                />
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"sideNavBlocks6"}
              data-plasmic-override={overrides.sideNavBlocks6}
              hasGap={true}
              className={classNames(projectcss.all, sty.sideNavBlocks6, {
                [sty.sideNavBlocks6collapsed]: hasVariant(
                  $state,
                  "collapsed",
                  "collapsed"
                )
              })}
            >
              <div
                data-plasmic-name={"_11"}
                data-plasmic-override={overrides._11}
                className={classNames(projectcss.all, sty._11)}
              >
                {false ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__o22Xv
                    )}
                  >
                    {"\uf078"}
                  </div>
                ) : null}
                <Icon19Icon
                  className={classNames(projectcss.all, sty.svg__euVWy, {
                    [sty.svgcollapsed__euVWyUym1M]: hasVariant(
                      $state,
                      "collapsed",
                      "collapsed"
                    )
                  })}
                  role={"img"}
                />
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"component24"}
              data-plasmic-override={overrides.component24}
              hasGap={true}
              className={classNames(projectcss.all, sty.component24)}
            >
              <div
                data-plasmic-name={"signOut"}
                data-plasmic-override={overrides.signOut}
                className={classNames(projectcss.all, sty.signOut)}
              />

              <Icon20Icon
                className={classNames(projectcss.all, sty.svg___5JlVl, {
                  [sty.svgcollapsed___5JlVlUym1M]: hasVariant(
                    $state,
                    "collapsed",
                    "collapsed"
                  )
                })}
                role={"img"}
              />

              <div
                data-plasmic-name={"_10"}
                data-plasmic-override={overrides._10}
                className={classNames(projectcss.all, sty._10)}
              >
                {false ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c7QJj
                    )}
                  >
                    {"\uf078"}
                  </div>
                ) : null}
              </div>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      ) : null}
      <p.Stack
        as={"div"}
        data-plasmic-name={"sideNavBlocks2"}
        data-plasmic-override={overrides.sideNavBlocks2}
        hasGap={true}
        className={classNames(projectcss.all, sty.sideNavBlocks2, {
          [sty.sideNavBlocks2collapsed]: hasVariant(
            $state,
            "collapsed",
            "collapsed"
          )
        })}
      >
        <Icon15Icon
          className={classNames(projectcss.all, sty.svg__l0Oae)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uXuNm,
            {
              [sty.textcollapsed__uXuNmuym1M]: hasVariant(
                $state,
                "collapsed",
                "collapsed"
              )
            }
          )}
        >
          {"Dashboard"}
        </div>
        <div
          data-plasmic-name={"_5"}
          data-plasmic-override={overrides._5}
          className={classNames(projectcss.all, sty._5)}
        >
          {false ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tEqNr
              )}
            >
              {"\uf078"}
            </div>
          ) : null}
        </div>
      </p.Stack>
      <p.Stack
        as={"div"}
        data-plasmic-name={"apps"}
        data-plasmic-override={overrides.apps}
        hasGap={true}
        className={classNames(projectcss.all, sty.apps, {
          [sty.appscollapsed]: hasVariant($state, "collapsed", "collapsed")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"_4"}
          data-plasmic-override={overrides._4}
          hasGap={true}
          className={classNames(projectcss.all, sty._4)}
        >
          <Icon10Icon
            className={classNames(projectcss.all, sty.svg__pm3Mm)}
            role={"img"}
          />

          <div
            data-plasmic-name={"overview"}
            data-plasmic-override={overrides.overview}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.overview
            )}
          >
            {"Apps"}
          </div>
          <Icon11Icon
            className={classNames(projectcss.all, sty.svg__qOfi)}
            role={"img"}
          />
        </p.Stack>
      </p.Stack>
      <p.Stack
        as={"div"}
        data-plasmic-name={"appList"}
        data-plasmic-override={overrides.appList}
        hasGap={true}
        className={classNames(projectcss.all, sty.appList, {
          [sty.appListcollapsed]: hasVariant($state, "collapsed", "collapsed")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"component18"}
          data-plasmic-override={overrides.component18}
          hasGap={true}
          className={classNames(projectcss.all, sty.component18)}
        >
          <div
            data-plasmic-name={"allUsers"}
            data-plasmic-override={overrides.allUsers}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.allUsers
            )}
          >
            {"Math "}
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"component19"}
          data-plasmic-override={overrides.component19}
          hasGap={true}
          className={classNames(projectcss.all, sty.component19)}
        >
          <div
            data-plasmic-name={"appUsage"}
            data-plasmic-override={overrides.appUsage}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.appUsage
            )}
          >
            {"Early Education"}
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"component20"}
          data-plasmic-override={overrides.component20}
          hasGap={true}
          className={classNames(projectcss.all, sty.component20)}
        >
          <div
            data-plasmic-name={"studentsStaff"}
            data-plasmic-override={overrides.studentsStaff}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.studentsStaff
            )}
          >
            {"Finance"}
          </div>
        </p.Stack>
      </p.Stack>
      <div
        data-plasmic-name={"figmaPaste"}
        data-plasmic-override={overrides.figmaPaste}
        className={classNames(projectcss.all, sty.figmaPaste, {
          [sty.figmaPastecollapsed]: hasVariant(
            $state,
            "collapsed",
            "collapsed"
          )
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"sideNavBlocks3"}
          data-plasmic-override={overrides.sideNavBlocks3}
          hasGap={true}
          className={classNames(projectcss.all, sty.sideNavBlocks3, {
            [sty.sideNavBlocks3collapsed]: hasVariant(
              $state,
              "collapsed",
              "collapsed"
            )
          })}
        >
          <Icon7Icon
            className={classNames(projectcss.all, sty.svg__z2EI)}
            role={"img"}
          />

          <div
            data-plasmic-name={"dashboard"}
            data-plasmic-override={overrides.dashboard}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.dashboard,
              {
                [sty.dashboardcollapsed]: hasVariant(
                  $state,
                  "collapsed",
                  "collapsed"
                )
              }
            )}
          >
            {"Settings"}
          </div>
          <div
            data-plasmic-name={"_6"}
            data-plasmic-override={overrides._6}
            className={classNames(projectcss.all, sty._6)}
          >
            {false ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mfB2W
                )}
              >
                {"\uf078"}
              </div>
            ) : null}
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"component22"}
          data-plasmic-override={overrides.component22}
          hasGap={true}
          className={classNames(projectcss.all, sty.component22)}
        >
          <Icon8Icon
            className={classNames(projectcss.all, sty.svg___1KoUu)}
            role={"img"}
          />

          <div
            data-plasmic-name={"dashboard2"}
            data-plasmic-override={overrides.dashboard2}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.dashboard2,
              {
                [sty.dashboard2collapsed]: hasVariant(
                  $state,
                  "collapsed",
                  "collapsed"
                )
              }
            )}
          >
            {"External Resources"}
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"component21"}
          data-plasmic-override={overrides.component21}
          hasGap={true}
          className={classNames(projectcss.all, sty.component21)}
        >
          <Icon9Icon
            className={classNames(projectcss.all, sty.svg__xbkAc)}
            role={"img"}
          />

          <div
            data-plasmic-name={"dashboard3"}
            data-plasmic-override={overrides.dashboard3}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.dashboard3
            )}
          >
            {"Log Out"}
          </div>
          <div
            data-plasmic-name={"_8"}
            data-plasmic-override={overrides._8}
            className={classNames(projectcss.all, sty._8)}
          >
            {false ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ggOS
                )}
              >
                {"\uf078"}
              </div>
            ) : null}
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "caretLeft",
    "ncdpiNextGenColor1",
    "card",
    "frame2988",
    "group3300",
    "freeBox",
    "superAdmin",
    "frame1340",
    "ncdpiNextGenColor2",
    "image11",
    "socialMedia",
    "image24",
    "group3092",
    "image12",
    "doeStatePortal",
    "card2",
    "background",
    "frame",
    "frame1338",
    "sideNavBlocks4",
    "grid2Plus",
    "_7",
    "sideNavBlocks7",
    "grid2Plus2",
    "_12",
    "sideNavBlocks5",
    "_9",
    "sideNavBlocks6",
    "_11",
    "component24",
    "signOut",
    "_10",
    "sideNavBlocks2",
    "_5",
    "apps",
    "_4",
    "overview",
    "appList",
    "component18",
    "allUsers",
    "component19",
    "appUsage",
    "component20",
    "studentsStaff",
    "figmaPaste",
    "sideNavBlocks3",
    "dashboard",
    "_6",
    "component22",
    "dashboard2",
    "component21",
    "dashboard3",
    "_8"
  ],
  caretLeft: ["caretLeft"],
  ncdpiNextGenColor1: ["ncdpiNextGenColor1"],
  card: ["card", "frame2988", "group3300", "freeBox", "superAdmin"],
  frame2988: ["frame2988", "group3300", "freeBox", "superAdmin"],
  group3300: ["group3300"],
  freeBox: ["freeBox", "superAdmin"],
  superAdmin: ["superAdmin"],
  frame1340: [
    "frame1340",
    "ncdpiNextGenColor2",
    "image11",
    "socialMedia",
    "image24",
    "group3092",
    "image12",
    "doeStatePortal",
    "card2",
    "background",
    "frame",
    "frame1338",
    "sideNavBlocks4",
    "grid2Plus",
    "_7",
    "sideNavBlocks7",
    "grid2Plus2",
    "_12",
    "sideNavBlocks5",
    "_9",
    "sideNavBlocks6",
    "_11",
    "component24",
    "signOut",
    "_10"
  ],
  ncdpiNextGenColor2: ["ncdpiNextGenColor2"],
  image11: ["image11"],
  socialMedia: ["socialMedia", "image24"],
  image24: ["image24"],
  group3092: ["group3092", "image12", "doeStatePortal"],
  image12: ["image12"],
  doeStatePortal: ["doeStatePortal"],
  card2: ["card2", "background", "frame"],
  background: ["background"],
  frame: ["frame"],
  frame1338: [
    "frame1338",
    "sideNavBlocks4",
    "grid2Plus",
    "_7",
    "sideNavBlocks7",
    "grid2Plus2",
    "_12",
    "sideNavBlocks5",
    "_9",
    "sideNavBlocks6",
    "_11",
    "component24",
    "signOut",
    "_10"
  ],
  sideNavBlocks4: ["sideNavBlocks4", "grid2Plus", "_7"],
  grid2Plus: ["grid2Plus"],
  _7: ["_7"],
  sideNavBlocks7: ["sideNavBlocks7", "grid2Plus2", "_12"],
  grid2Plus2: ["grid2Plus2"],
  _12: ["_12"],
  sideNavBlocks5: ["sideNavBlocks5", "_9"],
  _9: ["_9"],
  sideNavBlocks6: ["sideNavBlocks6", "_11"],
  _11: ["_11"],
  component24: ["component24", "signOut", "_10"],
  signOut: ["signOut"],
  _10: ["_10"],
  sideNavBlocks2: ["sideNavBlocks2", "_5"],
  _5: ["_5"],
  apps: ["apps", "_4", "overview"],
  _4: ["_4", "overview"],
  overview: ["overview"],
  appList: [
    "appList",
    "component18",
    "allUsers",
    "component19",
    "appUsage",
    "component20",
    "studentsStaff"
  ],
  component18: ["component18", "allUsers"],
  allUsers: ["allUsers"],
  component19: ["component19", "appUsage"],
  appUsage: ["appUsage"],
  component20: ["component20", "studentsStaff"],
  studentsStaff: ["studentsStaff"],
  figmaPaste: [
    "figmaPaste",
    "sideNavBlocks3",
    "dashboard",
    "_6",
    "component22",
    "dashboard2",
    "component21",
    "dashboard3",
    "_8"
  ],
  sideNavBlocks3: ["sideNavBlocks3", "dashboard", "_6"],
  dashboard: ["dashboard"],
  _6: ["_6"],
  component22: ["component22", "dashboard2"],
  dashboard2: ["dashboard2"],
  component21: ["component21", "dashboard3", "_8"],
  dashboard3: ["dashboard3"],
  _8: ["_8"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  caretLeft: "div";
  ncdpiNextGenColor1: "div";
  card: "div";
  frame2988: "div";
  group3300: "div";
  freeBox: "div";
  superAdmin: "div";
  frame1340: "div";
  ncdpiNextGenColor2: "div";
  image11: "div";
  socialMedia: "div";
  image24: "div";
  group3092: "div";
  image12: "div";
  doeStatePortal: "div";
  card2: "div";
  background: "div";
  frame: "div";
  frame1338: "div";
  sideNavBlocks4: "div";
  grid2Plus: "div";
  _7: "div";
  sideNavBlocks7: "div";
  grid2Plus2: "div";
  _12: "div";
  sideNavBlocks5: "div";
  _9: "div";
  sideNavBlocks6: "div";
  _11: "div";
  component24: "div";
  signOut: "div";
  _10: "div";
  sideNavBlocks2: "div";
  _5: "div";
  apps: "div";
  _4: "div";
  overview: "div";
  appList: "div";
  component18: "div";
  allUsers: "div";
  component19: "div";
  appUsage: "div";
  component20: "div";
  studentsStaff: "div";
  figmaPaste: "div";
  sideNavBlocks3: "div";
  dashboard: "div";
  _6: "div";
  component22: "div";
  dashboard2: "div";
  component21: "div";
  dashboard3: "div";
  _8: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNav__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNav__VariantsArgs;
    args?: PlasmicNav__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNav__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNav__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNav__ArgProps,
          internalVariantPropNames: PlasmicNav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNav";
  } else {
    func.displayName = `PlasmicNav.${nodeName}`;
  }
  return func;
}

export const PlasmicNav = Object.assign(
  // Top-level PlasmicNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    caretLeft: makeNodeComponent("caretLeft"),
    ncdpiNextGenColor1: makeNodeComponent("ncdpiNextGenColor1"),
    card: makeNodeComponent("card"),
    frame2988: makeNodeComponent("frame2988"),
    group3300: makeNodeComponent("group3300"),
    freeBox: makeNodeComponent("freeBox"),
    superAdmin: makeNodeComponent("superAdmin"),
    frame1340: makeNodeComponent("frame1340"),
    ncdpiNextGenColor2: makeNodeComponent("ncdpiNextGenColor2"),
    image11: makeNodeComponent("image11"),
    socialMedia: makeNodeComponent("socialMedia"),
    image24: makeNodeComponent("image24"),
    group3092: makeNodeComponent("group3092"),
    image12: makeNodeComponent("image12"),
    doeStatePortal: makeNodeComponent("doeStatePortal"),
    card2: makeNodeComponent("card2"),
    background: makeNodeComponent("background"),
    frame: makeNodeComponent("frame"),
    frame1338: makeNodeComponent("frame1338"),
    sideNavBlocks4: makeNodeComponent("sideNavBlocks4"),
    grid2Plus: makeNodeComponent("grid2Plus"),
    _7: makeNodeComponent("_7"),
    sideNavBlocks7: makeNodeComponent("sideNavBlocks7"),
    grid2Plus2: makeNodeComponent("grid2Plus2"),
    _12: makeNodeComponent("_12"),
    sideNavBlocks5: makeNodeComponent("sideNavBlocks5"),
    _9: makeNodeComponent("_9"),
    sideNavBlocks6: makeNodeComponent("sideNavBlocks6"),
    _11: makeNodeComponent("_11"),
    component24: makeNodeComponent("component24"),
    signOut: makeNodeComponent("signOut"),
    _10: makeNodeComponent("_10"),
    sideNavBlocks2: makeNodeComponent("sideNavBlocks2"),
    _5: makeNodeComponent("_5"),
    apps: makeNodeComponent("apps"),
    _4: makeNodeComponent("_4"),
    overview: makeNodeComponent("overview"),
    appList: makeNodeComponent("appList"),
    component18: makeNodeComponent("component18"),
    allUsers: makeNodeComponent("allUsers"),
    component19: makeNodeComponent("component19"),
    appUsage: makeNodeComponent("appUsage"),
    component20: makeNodeComponent("component20"),
    studentsStaff: makeNodeComponent("studentsStaff"),
    figmaPaste: makeNodeComponent("figmaPaste"),
    sideNavBlocks3: makeNodeComponent("sideNavBlocks3"),
    dashboard: makeNodeComponent("dashboard"),
    _6: makeNodeComponent("_6"),
    component22: makeNodeComponent("component22"),
    dashboard2: makeNodeComponent("dashboard2"),
    component21: makeNodeComponent("component21"),
    dashboard3: makeNodeComponent("dashboard3"),
    _8: makeNodeComponent("_8"),

    // Metadata about props expected for PlasmicNav
    internalVariantProps: PlasmicNav__VariantProps,
    internalArgProps: PlasmicNav__ArgProps
  }
);

export default PlasmicNav;
/* prettier-ignore-end */
