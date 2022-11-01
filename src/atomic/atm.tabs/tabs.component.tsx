import { TabsRootStyled, TabsContentStyled, TabsListStyled, TabsTriggerStyled } from './tabs.component.style';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const Tabs = (props: TabsPrimitive.TabsProps) => <TabsRootStyled {...props}>{props.children}</TabsRootStyled>;

Tabs.List = TabsListStyled;
Tabs.Trigger = TabsTriggerStyled;
Tabs.Content = TabsContentStyled;
