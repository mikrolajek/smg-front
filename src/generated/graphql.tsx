import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamp: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars["bigint"]>;
  _gt?: Maybe<Scalars["bigint"]>;
  _gte?: Maybe<Scalars["bigint"]>;
  _in?: Maybe<Array<Scalars["bigint"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bigint"]>;
  _lte?: Maybe<Scalars["bigint"]>;
  _neq?: Maybe<Scalars["bigint"]>;
  _nin?: Maybe<Array<Scalars["bigint"]>>;
};

/** columns and relationships of "code" */
export type Code = {
  __typename?: "code";
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregated array relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars["Int"];
  /** An array relationship */
  pairTrackersByPair2: Array<Pair_Tracker>;
  /** An aggregated array relationship */
  pairTrackersByPair2_aggregate: Pair_Tracker_Aggregate;
  /** An array relationship */
  pair_trackers: Array<Pair_Tracker>;
  /** An aggregated array relationship */
  pair_trackers_aggregate: Pair_Tracker_Aggregate;
  taken: Scalars["Boolean"];
  type: Scalars["String"];
  uid: Scalars["String"];
};

/** columns and relationships of "code" */
export type CodeGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** columns and relationships of "code" */
export type CodeGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** columns and relationships of "code" */
export type CodePairTrackersByPair2Args = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** columns and relationships of "code" */
export type CodePairTrackersByPair2_AggregateArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** columns and relationships of "code" */
export type CodePair_TrackersArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** columns and relationships of "code" */
export type CodePair_Trackers_AggregateArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** aggregated selection of "code" */
export type Code_Aggregate = {
  __typename?: "code_aggregate";
  aggregate?: Maybe<Code_Aggregate_Fields>;
  nodes: Array<Code>;
};

/** aggregate fields of "code" */
export type Code_Aggregate_Fields = {
  __typename?: "code_aggregate_fields";
  avg?: Maybe<Code_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Code_Max_Fields>;
  min?: Maybe<Code_Min_Fields>;
  stddev?: Maybe<Code_Stddev_Fields>;
  stddev_pop?: Maybe<Code_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Code_Stddev_Samp_Fields>;
  sum?: Maybe<Code_Sum_Fields>;
  var_pop?: Maybe<Code_Var_Pop_Fields>;
  var_samp?: Maybe<Code_Var_Samp_Fields>;
  variance?: Maybe<Code_Variance_Fields>;
};

/** aggregate fields of "code" */
export type Code_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Code_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "code" */
export type Code_Aggregate_Order_By = {
  avg?: Maybe<Code_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Code_Max_Order_By>;
  min?: Maybe<Code_Min_Order_By>;
  stddev?: Maybe<Code_Stddev_Order_By>;
  stddev_pop?: Maybe<Code_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Code_Stddev_Samp_Order_By>;
  sum?: Maybe<Code_Sum_Order_By>;
  var_pop?: Maybe<Code_Var_Pop_Order_By>;
  var_samp?: Maybe<Code_Var_Samp_Order_By>;
  variance?: Maybe<Code_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "code" */
export type Code_Arr_Rel_Insert_Input = {
  data: Array<Code_Insert_Input>;
  on_conflict?: Maybe<Code_On_Conflict>;
};

/** aggregate avg on columns */
export type Code_Avg_Fields = {
  __typename?: "code_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "code" */
export type Code_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "code". All fields are combined with a logical 'AND'. */
export type Code_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Code_Bool_Exp>>>;
  _not?: Maybe<Code_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Code_Bool_Exp>>>;
  groups?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  pairTrackersByPair2?: Maybe<Pair_Tracker_Bool_Exp>;
  pair_trackers?: Maybe<Pair_Tracker_Bool_Exp>;
  taken?: Maybe<Boolean_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "code" */
export enum Code_Constraint {
  /** unique or primary key constraint */
  CodePkey = "code_pkey",
  /** unique or primary key constraint */
  CodeUidKey = "code_uid_key",
}

/** input type for incrementing integer column in table "code" */
export type Code_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "code" */
export type Code_Insert_Input = {
  groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  pairTrackersByPair2?: Maybe<Pair_Tracker_Arr_Rel_Insert_Input>;
  pair_trackers?: Maybe<Pair_Tracker_Arr_Rel_Insert_Input>;
  taken?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Code_Max_Fields = {
  __typename?: "code_max_fields";
  id?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "code" */
export type Code_Max_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Code_Min_Fields = {
  __typename?: "code_min_fields";
  id?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "code" */
export type Code_Min_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** response of any mutation on the table "code" */
export type Code_Mutation_Response = {
  __typename?: "code_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Code>;
};

/** input type for inserting object relation for remote table "code" */
export type Code_Obj_Rel_Insert_Input = {
  data: Code_Insert_Input;
  on_conflict?: Maybe<Code_On_Conflict>;
};

/** on conflict condition type for table "code" */
export type Code_On_Conflict = {
  constraint: Code_Constraint;
  update_columns: Array<Code_Update_Column>;
  where?: Maybe<Code_Bool_Exp>;
};

/** ordering options when selecting data from "code" */
export type Code_Order_By = {
  groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  pairTrackersByPair2_aggregate?: Maybe<Pair_Tracker_Aggregate_Order_By>;
  pair_trackers_aggregate?: Maybe<Pair_Tracker_Aggregate_Order_By>;
  taken?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** primary key columns input for table: "code" */
export type Code_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "code" */
export enum Code_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Taken = "taken",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "code" */
export type Code_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  taken?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Code_Stddev_Fields = {
  __typename?: "code_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "code" */
export type Code_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Code_Stddev_Pop_Fields = {
  __typename?: "code_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "code" */
export type Code_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Code_Stddev_Samp_Fields = {
  __typename?: "code_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "code" */
export type Code_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Code_Sum_Fields = {
  __typename?: "code_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "code" */
export type Code_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "code" */
export enum Code_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Taken = "taken",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

/** aggregate var_pop on columns */
export type Code_Var_Pop_Fields = {
  __typename?: "code_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "code" */
export type Code_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Code_Var_Samp_Fields = {
  __typename?: "code_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "code" */
export type Code_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Code_Variance_Fields = {
  __typename?: "code_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "code" */
export type Code_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "company" */
export type Company = {
  __typename?: "company";
  id: Scalars["Int"];
  /** An array relationship */
  locations: Array<Location>;
  /** An aggregated array relationship */
  locations_aggregate: Location_Aggregate;
  name: Scalars["String"];
};

/** columns and relationships of "company" */
export type CompanyLocationsArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};

/** columns and relationships of "company" */
export type CompanyLocations_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};

/** aggregated selection of "company" */
export type Company_Aggregate = {
  __typename?: "company_aggregate";
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_Fields = {
  __typename?: "company_aggregate_fields";
  avg?: Maybe<Company_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Company_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "company" */
export type Company_Aggregate_Order_By = {
  avg?: Maybe<Company_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Company_Max_Order_By>;
  min?: Maybe<Company_Min_Order_By>;
  stddev?: Maybe<Company_Stddev_Order_By>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Order_By>;
  sum?: Maybe<Company_Sum_Order_By>;
  var_pop?: Maybe<Company_Var_Pop_Order_By>;
  var_samp?: Maybe<Company_Var_Samp_Order_By>;
  variance?: Maybe<Company_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "company" */
export type Company_Arr_Rel_Insert_Input = {
  data: Array<Company_Insert_Input>;
  on_conflict?: Maybe<Company_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  __typename?: "company_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "company" */
export type Company_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Company_Bool_Exp>>>;
  _not?: Maybe<Company_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Company_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  locations?: Maybe<Location_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "company" */
export enum Company_Constraint {
  /** unique or primary key constraint */
  CompanyPkey = "company_pkey",
}

/** columns and relationships of "company_engagement" */
export type Company_Engagement = {
  __typename?: "company_engagement";
  company_name?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["bigint"]>;
};

/** aggregated selection of "company_engagement" */
export type Company_Engagement_Aggregate = {
  __typename?: "company_engagement_aggregate";
  aggregate?: Maybe<Company_Engagement_Aggregate_Fields>;
  nodes: Array<Company_Engagement>;
};

/** aggregate fields of "company_engagement" */
export type Company_Engagement_Aggregate_Fields = {
  __typename?: "company_engagement_aggregate_fields";
  avg?: Maybe<Company_Engagement_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Company_Engagement_Max_Fields>;
  min?: Maybe<Company_Engagement_Min_Fields>;
  stddev?: Maybe<Company_Engagement_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Engagement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Engagement_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Engagement_Sum_Fields>;
  var_pop?: Maybe<Company_Engagement_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Engagement_Var_Samp_Fields>;
  variance?: Maybe<Company_Engagement_Variance_Fields>;
};

/** aggregate fields of "company_engagement" */
export type Company_Engagement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Company_Engagement_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "company_engagement" */
export type Company_Engagement_Aggregate_Order_By = {
  avg?: Maybe<Company_Engagement_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Company_Engagement_Max_Order_By>;
  min?: Maybe<Company_Engagement_Min_Order_By>;
  stddev?: Maybe<Company_Engagement_Stddev_Order_By>;
  stddev_pop?: Maybe<Company_Engagement_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Company_Engagement_Stddev_Samp_Order_By>;
  sum?: Maybe<Company_Engagement_Sum_Order_By>;
  var_pop?: Maybe<Company_Engagement_Var_Pop_Order_By>;
  var_samp?: Maybe<Company_Engagement_Var_Samp_Order_By>;
  variance?: Maybe<Company_Engagement_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Company_Engagement_Avg_Fields = {
  __typename?: "company_engagement_avg_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "company_engagement" */
export type Company_Engagement_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company_engagement". All fields are combined with a logical 'AND'. */
export type Company_Engagement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Company_Engagement_Bool_Exp>>>;
  _not?: Maybe<Company_Engagement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Company_Engagement_Bool_Exp>>>;
  company_name?: Maybe<String_Comparison_Exp>;
  count?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Company_Engagement_Max_Fields = {
  __typename?: "company_engagement_max_fields";
  company_name?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "company_engagement" */
export type Company_Engagement_Max_Order_By = {
  company_name?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Engagement_Min_Fields = {
  __typename?: "company_engagement_min_fields";
  company_name?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "company_engagement" */
export type Company_Engagement_Min_Order_By = {
  company_name?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
};

/** ordering options when selecting data from "company_engagement" */
export type Company_Engagement_Order_By = {
  company_name?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
};

/** select columns of table "company_engagement" */
export enum Company_Engagement_Select_Column {
  /** column name */
  CompanyName = "company_name",
  /** column name */
  Count = "count",
}

/** aggregate stddev on columns */
export type Company_Engagement_Stddev_Fields = {
  __typename?: "company_engagement_stddev_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "company_engagement" */
export type Company_Engagement_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Engagement_Stddev_Pop_Fields = {
  __typename?: "company_engagement_stddev_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "company_engagement" */
export type Company_Engagement_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Engagement_Stddev_Samp_Fields = {
  __typename?: "company_engagement_stddev_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "company_engagement" */
export type Company_Engagement_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_Engagement_Sum_Fields = {
  __typename?: "company_engagement_sum_fields";
  count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "company_engagement" */
export type Company_Engagement_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Company_Engagement_Var_Pop_Fields = {
  __typename?: "company_engagement_var_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "company_engagement" */
export type Company_Engagement_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Engagement_Var_Samp_Fields = {
  __typename?: "company_engagement_var_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "company_engagement" */
export type Company_Engagement_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Engagement_Variance_Fields = {
  __typename?: "company_engagement_variance_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "company_engagement" */
export type Company_Engagement_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "company" */
export type Company_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "company" */
export type Company_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  locations?: Maybe<Location_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  __typename?: "company_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "company" */
export type Company_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  __typename?: "company_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "company" */
export type Company_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "company" */
export type Company_Mutation_Response = {
  __typename?: "company_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Company>;
};

/** input type for inserting object relation for remote table "company" */
export type Company_Obj_Rel_Insert_Input = {
  data: Company_Insert_Input;
  on_conflict?: Maybe<Company_On_Conflict>;
};

/** on conflict condition type for table "company" */
export type Company_On_Conflict = {
  constraint: Company_Constraint;
  update_columns: Array<Company_Update_Column>;
  where?: Maybe<Company_Bool_Exp>;
};

/** ordering options when selecting data from "company" */
export type Company_Order_By = {
  id?: Maybe<Order_By>;
  locations_aggregate?: Maybe<Location_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "company" */
export type Company_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "company" */
export enum Company_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "company" */
export type Company_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  __typename?: "company_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "company" */
export type Company_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  __typename?: "company_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "company" */
export type Company_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  __typename?: "company_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "company" */
export type Company_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  __typename?: "company_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "company" */
export type Company_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "company" */
export enum Company_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  __typename?: "company_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "company" */
export type Company_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  __typename?: "company_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "company" */
export type Company_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  __typename?: "company_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "company" */
export type Company_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: "group";
  /** An object relationship */
  code: Code;
  from_date: Scalars["timestamp"];
  id: Scalars["Int"];
  id_code: Scalars["Int"];
  id_link: Scalars["Int"];
  id_location: Scalars["Int"];
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product: Scalars["Int"];
  /** An object relationship */
  link: Link;
  /** An object relationship */
  location: Location;
  /** An array relationship */
  logs: Array<Log>;
  /** An aggregated array relationship */
  logs_aggregate: Log_Aggregate;
  /** An object relationship */
  pair_tracker?: Maybe<Pair_Tracker>;
  /** An object relationship */
  product: Product;
  to_date?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "group" */
export type GroupLogsArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: "group_aggregate";
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: "group_aggregate_fields";
  avg?: Maybe<Group_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "group" */
export type Group_Aggregate_Order_By = {
  avg?: Maybe<Group_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Max_Order_By>;
  min?: Maybe<Group_Min_Order_By>;
  stddev?: Maybe<Group_Stddev_Order_By>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Order_By>;
  sum?: Maybe<Group_Sum_Order_By>;
  var_pop?: Maybe<Group_Var_Pop_Order_By>;
  var_samp?: Maybe<Group_Var_Samp_Order_By>;
  variance?: Maybe<Group_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group" */
export type Group_Arr_Rel_Insert_Input = {
  data: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  __typename?: "group_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "group" */
export type Group_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Bool_Exp>>>;
  _not?: Maybe<Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Bool_Exp>>>;
  code?: Maybe<Code_Bool_Exp>;
  from_date?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_code?: Maybe<Int_Comparison_Exp>;
  id_link?: Maybe<Int_Comparison_Exp>;
  id_location?: Maybe<Int_Comparison_Exp>;
  id_pair_tracker?: Maybe<Int_Comparison_Exp>;
  id_product?: Maybe<Int_Comparison_Exp>;
  link?: Maybe<Link_Bool_Exp>;
  location?: Maybe<Location_Bool_Exp>;
  logs?: Maybe<Log_Bool_Exp>;
  pair_tracker?: Maybe<Pair_Tracker_Bool_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  to_date?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint */
  GroupPkey = "group_pkey",
}

/** input type for incrementing integer column in table "group" */
export type Group_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  id_code?: Maybe<Scalars["Int"]>;
  id_link?: Maybe<Scalars["Int"]>;
  id_location?: Maybe<Scalars["Int"]>;
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  code?: Maybe<Code_Obj_Rel_Insert_Input>;
  from_date?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["Int"]>;
  id_code?: Maybe<Scalars["Int"]>;
  id_link?: Maybe<Scalars["Int"]>;
  id_location?: Maybe<Scalars["Int"]>;
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product?: Maybe<Scalars["Int"]>;
  link?: Maybe<Link_Obj_Rel_Insert_Input>;
  location?: Maybe<Location_Obj_Rel_Insert_Input>;
  logs?: Maybe<Log_Arr_Rel_Insert_Input>;
  pair_tracker?: Maybe<Pair_Tracker_Obj_Rel_Insert_Input>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  to_date?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: "group_max_fields";
  from_date?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["Int"]>;
  id_code?: Maybe<Scalars["Int"]>;
  id_link?: Maybe<Scalars["Int"]>;
  id_location?: Maybe<Scalars["Int"]>;
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product?: Maybe<Scalars["Int"]>;
  to_date?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "group" */
export type Group_Max_Order_By = {
  from_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
  to_date?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: "group_min_fields";
  from_date?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["Int"]>;
  id_code?: Maybe<Scalars["Int"]>;
  id_link?: Maybe<Scalars["Int"]>;
  id_location?: Maybe<Scalars["Int"]>;
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product?: Maybe<Scalars["Int"]>;
  to_date?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "group" */
export type Group_Min_Order_By = {
  from_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
  to_date?: Maybe<Order_By>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: "group_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Group>;
};

/** input type for inserting object relation for remote table "group" */
export type Group_Obj_Rel_Insert_Input = {
  data: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** on conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns: Array<Group_Update_Column>;
  where?: Maybe<Group_Bool_Exp>;
};

/** ordering options when selecting data from "group" */
export type Group_Order_By = {
  code?: Maybe<Code_Order_By>;
  from_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
  link?: Maybe<Link_Order_By>;
  location?: Maybe<Location_Order_By>;
  logs_aggregate?: Maybe<Log_Aggregate_Order_By>;
  pair_tracker?: Maybe<Pair_Tracker_Order_By>;
  product?: Maybe<Product_Order_By>;
  to_date?: Maybe<Order_By>;
};

/** primary key columns input for table: "group" */
export type Group_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  FromDate = "from_date",
  /** column name */
  Id = "id",
  /** column name */
  IdCode = "id_code",
  /** column name */
  IdLink = "id_link",
  /** column name */
  IdLocation = "id_location",
  /** column name */
  IdPairTracker = "id_pair_tracker",
  /** column name */
  IdProduct = "id_product",
  /** column name */
  ToDate = "to_date",
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  from_date?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["Int"]>;
  id_code?: Maybe<Scalars["Int"]>;
  id_link?: Maybe<Scalars["Int"]>;
  id_location?: Maybe<Scalars["Int"]>;
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product?: Maybe<Scalars["Int"]>;
  to_date?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  __typename?: "group_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "group" */
export type Group_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  __typename?: "group_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "group" */
export type Group_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  __typename?: "group_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "group" */
export type Group_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  __typename?: "group_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  id_code?: Maybe<Scalars["Int"]>;
  id_link?: Maybe<Scalars["Int"]>;
  id_location?: Maybe<Scalars["Int"]>;
  id_pair_tracker?: Maybe<Scalars["Int"]>;
  id_product?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "group" */
export type Group_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  FromDate = "from_date",
  /** column name */
  Id = "id",
  /** column name */
  IdCode = "id_code",
  /** column name */
  IdLink = "id_link",
  /** column name */
  IdLocation = "id_location",
  /** column name */
  IdPairTracker = "id_pair_tracker",
  /** column name */
  IdProduct = "id_product",
  /** column name */
  ToDate = "to_date",
}

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  __typename?: "group_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "group" */
export type Group_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  __typename?: "group_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "group" */
export type Group_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  __typename?: "group_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code?: Maybe<Scalars["Float"]>;
  id_link?: Maybe<Scalars["Float"]>;
  id_location?: Maybe<Scalars["Float"]>;
  id_pair_tracker?: Maybe<Scalars["Float"]>;
  id_product?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "group" */
export type Group_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_code?: Maybe<Order_By>;
  id_link?: Maybe<Order_By>;
  id_location?: Maybe<Order_By>;
  id_pair_tracker?: Maybe<Order_By>;
  id_product?: Maybe<Order_By>;
};

/** columns and relationships of "link" */
export type Link = {
  __typename?: "link";
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregated array relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars["Int"];
  url: Scalars["String"];
};

/** columns and relationships of "link" */
export type LinkGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** columns and relationships of "link" */
export type LinkGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** aggregated selection of "link" */
export type Link_Aggregate = {
  __typename?: "link_aggregate";
  aggregate?: Maybe<Link_Aggregate_Fields>;
  nodes: Array<Link>;
};

/** aggregate fields of "link" */
export type Link_Aggregate_Fields = {
  __typename?: "link_aggregate_fields";
  avg?: Maybe<Link_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Link_Max_Fields>;
  min?: Maybe<Link_Min_Fields>;
  stddev?: Maybe<Link_Stddev_Fields>;
  stddev_pop?: Maybe<Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Link_Stddev_Samp_Fields>;
  sum?: Maybe<Link_Sum_Fields>;
  var_pop?: Maybe<Link_Var_Pop_Fields>;
  var_samp?: Maybe<Link_Var_Samp_Fields>;
  variance?: Maybe<Link_Variance_Fields>;
};

/** aggregate fields of "link" */
export type Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Link_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "link" */
export type Link_Aggregate_Order_By = {
  avg?: Maybe<Link_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Link_Max_Order_By>;
  min?: Maybe<Link_Min_Order_By>;
  stddev?: Maybe<Link_Stddev_Order_By>;
  stddev_pop?: Maybe<Link_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Link_Stddev_Samp_Order_By>;
  sum?: Maybe<Link_Sum_Order_By>;
  var_pop?: Maybe<Link_Var_Pop_Order_By>;
  var_samp?: Maybe<Link_Var_Samp_Order_By>;
  variance?: Maybe<Link_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "link" */
export type Link_Arr_Rel_Insert_Input = {
  data: Array<Link_Insert_Input>;
  on_conflict?: Maybe<Link_On_Conflict>;
};

/** aggregate avg on columns */
export type Link_Avg_Fields = {
  __typename?: "link_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "link" */
export type Link_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "link". All fields are combined with a logical 'AND'. */
export type Link_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Link_Bool_Exp>>>;
  _not?: Maybe<Link_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Link_Bool_Exp>>>;
  groups?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "link" */
export enum Link_Constraint {
  /** unique or primary key constraint */
  UrlPkey = "url_pkey",
}

/** input type for incrementing integer column in table "link" */
export type Link_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "link" */
export type Link_Insert_Input = {
  groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Link_Max_Fields = {
  __typename?: "link_max_fields";
  id?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "link" */
export type Link_Max_Order_By = {
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Link_Min_Fields = {
  __typename?: "link_min_fields";
  id?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "link" */
export type Link_Min_Order_By = {
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "link" */
export type Link_Mutation_Response = {
  __typename?: "link_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Link>;
};

/** input type for inserting object relation for remote table "link" */
export type Link_Obj_Rel_Insert_Input = {
  data: Link_Insert_Input;
  on_conflict?: Maybe<Link_On_Conflict>;
};

/** on conflict condition type for table "link" */
export type Link_On_Conflict = {
  constraint: Link_Constraint;
  update_columns: Array<Link_Update_Column>;
  where?: Maybe<Link_Bool_Exp>;
};

/** ordering options when selecting data from "link" */
export type Link_Order_By = {
  groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "link" */
export type Link_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "link" */
export enum Link_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Url = "url",
}

/** input type for updating data in table "link" */
export type Link_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Link_Stddev_Fields = {
  __typename?: "link_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "link" */
export type Link_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Link_Stddev_Pop_Fields = {
  __typename?: "link_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "link" */
export type Link_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Link_Stddev_Samp_Fields = {
  __typename?: "link_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "link" */
export type Link_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Link_Sum_Fields = {
  __typename?: "link_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "link" */
export type Link_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "link" */
export enum Link_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Url = "url",
}

/** aggregate var_pop on columns */
export type Link_Var_Pop_Fields = {
  __typename?: "link_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "link" */
export type Link_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Link_Var_Samp_Fields = {
  __typename?: "link_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "link" */
export type Link_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Link_Variance_Fields = {
  __typename?: "link_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "link" */
export type Link_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: "location";
  address: Scalars["String"];
  /** An object relationship */
  company: Company;
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregated array relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars["Int"];
  id_company: Scalars["Int"];
};

/** columns and relationships of "location" */
export type LocationGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** columns and relationships of "location" */
export type LocationGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: "location_aggregate";
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: "location_aggregate_fields";
  avg?: Maybe<Location_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
  stddev?: Maybe<Location_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Sum_Fields>;
  var_pop?: Maybe<Location_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Var_Samp_Fields>;
  variance?: Maybe<Location_Variance_Fields>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Location_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "location" */
export type Location_Aggregate_Order_By = {
  avg?: Maybe<Location_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Location_Max_Order_By>;
  min?: Maybe<Location_Min_Order_By>;
  stddev?: Maybe<Location_Stddev_Order_By>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Order_By>;
  sum?: Maybe<Location_Sum_Order_By>;
  var_pop?: Maybe<Location_Var_Pop_Order_By>;
  var_samp?: Maybe<Location_Var_Samp_Order_By>;
  variance?: Maybe<Location_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "location" */
export type Location_Arr_Rel_Insert_Input = {
  data: Array<Location_Insert_Input>;
  on_conflict?: Maybe<Location_On_Conflict>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: "location_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "location" */
export type Location_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Location_Bool_Exp>>>;
  _not?: Maybe<Location_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Location_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  company?: Maybe<Company_Bool_Exp>;
  groups?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_company?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint */
  BranchPkey = "branch_pkey",
}

/** columns and relationships of "location_engagement" */
export type Location_Engagement = {
  __typename?: "location_engagement";
  address?: Maybe<Scalars["String"]>;
  company_name?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["bigint"]>;
};

/** aggregated selection of "location_engagement" */
export type Location_Engagement_Aggregate = {
  __typename?: "location_engagement_aggregate";
  aggregate?: Maybe<Location_Engagement_Aggregate_Fields>;
  nodes: Array<Location_Engagement>;
};

/** aggregate fields of "location_engagement" */
export type Location_Engagement_Aggregate_Fields = {
  __typename?: "location_engagement_aggregate_fields";
  avg?: Maybe<Location_Engagement_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Location_Engagement_Max_Fields>;
  min?: Maybe<Location_Engagement_Min_Fields>;
  stddev?: Maybe<Location_Engagement_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Engagement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Engagement_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Engagement_Sum_Fields>;
  var_pop?: Maybe<Location_Engagement_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Engagement_Var_Samp_Fields>;
  variance?: Maybe<Location_Engagement_Variance_Fields>;
};

/** aggregate fields of "location_engagement" */
export type Location_Engagement_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Location_Engagement_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "location_engagement" */
export type Location_Engagement_Aggregate_Order_By = {
  avg?: Maybe<Location_Engagement_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Location_Engagement_Max_Order_By>;
  min?: Maybe<Location_Engagement_Min_Order_By>;
  stddev?: Maybe<Location_Engagement_Stddev_Order_By>;
  stddev_pop?: Maybe<Location_Engagement_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Location_Engagement_Stddev_Samp_Order_By>;
  sum?: Maybe<Location_Engagement_Sum_Order_By>;
  var_pop?: Maybe<Location_Engagement_Var_Pop_Order_By>;
  var_samp?: Maybe<Location_Engagement_Var_Samp_Order_By>;
  variance?: Maybe<Location_Engagement_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Location_Engagement_Avg_Fields = {
  __typename?: "location_engagement_avg_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "location_engagement" */
export type Location_Engagement_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "location_engagement". All fields are combined with a logical 'AND'. */
export type Location_Engagement_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Location_Engagement_Bool_Exp>>>;
  _not?: Maybe<Location_Engagement_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Location_Engagement_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  count?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Location_Engagement_Max_Fields = {
  __typename?: "location_engagement_max_fields";
  address?: Maybe<Scalars["String"]>;
  company_name?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "location_engagement" */
export type Location_Engagement_Max_Order_By = {
  address?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Location_Engagement_Min_Fields = {
  __typename?: "location_engagement_min_fields";
  address?: Maybe<Scalars["String"]>;
  company_name?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "location_engagement" */
export type Location_Engagement_Min_Order_By = {
  address?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
};

/** ordering options when selecting data from "location_engagement" */
export type Location_Engagement_Order_By = {
  address?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
};

/** select columns of table "location_engagement" */
export enum Location_Engagement_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  CompanyName = "company_name",
  /** column name */
  Count = "count",
}

/** aggregate stddev on columns */
export type Location_Engagement_Stddev_Fields = {
  __typename?: "location_engagement_stddev_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "location_engagement" */
export type Location_Engagement_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Location_Engagement_Stddev_Pop_Fields = {
  __typename?: "location_engagement_stddev_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "location_engagement" */
export type Location_Engagement_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Location_Engagement_Stddev_Samp_Fields = {
  __typename?: "location_engagement_stddev_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "location_engagement" */
export type Location_Engagement_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Location_Engagement_Sum_Fields = {
  __typename?: "location_engagement_sum_fields";
  count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "location_engagement" */
export type Location_Engagement_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Location_Engagement_Var_Pop_Fields = {
  __typename?: "location_engagement_var_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "location_engagement" */
export type Location_Engagement_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Location_Engagement_Var_Samp_Fields = {
  __typename?: "location_engagement_var_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "location_engagement" */
export type Location_Engagement_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Location_Engagement_Variance_Fields = {
  __typename?: "location_engagement_variance_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "location_engagement" */
export type Location_Engagement_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "location" */
export type Location_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  id_company?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  address?: Maybe<Scalars["String"]>;
  company?: Maybe<Company_Obj_Rel_Insert_Input>;
  groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  id_company?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: "location_max_fields";
  address?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  id_company?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "location" */
export type Location_Max_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: "location_min_fields";
  address?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  id_company?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "location" */
export type Location_Min_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: "location_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input;
  on_conflict?: Maybe<Location_On_Conflict>;
};

/** on conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns: Array<Location_Update_Column>;
  where?: Maybe<Location_Bool_Exp>;
};

/** ordering options when selecting data from "location" */
export type Location_Order_By = {
  address?: Maybe<Order_By>;
  company?: Maybe<Company_Order_By>;
  groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** primary key columns input for table: "location" */
export type Location_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  Id = "id",
  /** column name */
  IdCompany = "id_company",
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  address?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  id_company?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: "location_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "location" */
export type Location_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: "location_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "location" */
export type Location_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: "location_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "location" */
export type Location_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: "location_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  id_company?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "location" */
export type Location_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  Id = "id",
  /** column name */
  IdCompany = "id_company",
}

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: "location_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "location" */
export type Location_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: "location_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "location" */
export type Location_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: "location_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  id_company?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "location" */
export type Location_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_company?: Maybe<Order_By>;
};

/** columns and relationships of "log" */
export type Log = {
  __typename?: "log";
  accept_language: Scalars["String"];
  created_at: Scalars["timestamptz"];
  device_type: Scalars["String"];
  /** An object relationship */
  group: Group;
  id: Scalars["Int"];
  id_group: Scalars["Int"];
  ip: Scalars["String"];
  user_agent: Scalars["String"];
};

/** aggregated selection of "log" */
export type Log_Aggregate = {
  __typename?: "log_aggregate";
  aggregate?: Maybe<Log_Aggregate_Fields>;
  nodes: Array<Log>;
};

/** aggregate fields of "log" */
export type Log_Aggregate_Fields = {
  __typename?: "log_aggregate_fields";
  avg?: Maybe<Log_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Log_Max_Fields>;
  min?: Maybe<Log_Min_Fields>;
  stddev?: Maybe<Log_Stddev_Fields>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Fields>;
  sum?: Maybe<Log_Sum_Fields>;
  var_pop?: Maybe<Log_Var_Pop_Fields>;
  var_samp?: Maybe<Log_Var_Samp_Fields>;
  variance?: Maybe<Log_Variance_Fields>;
};

/** aggregate fields of "log" */
export type Log_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Log_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "log" */
export type Log_Aggregate_Order_By = {
  avg?: Maybe<Log_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Log_Max_Order_By>;
  min?: Maybe<Log_Min_Order_By>;
  stddev?: Maybe<Log_Stddev_Order_By>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Order_By>;
  sum?: Maybe<Log_Sum_Order_By>;
  var_pop?: Maybe<Log_Var_Pop_Order_By>;
  var_samp?: Maybe<Log_Var_Samp_Order_By>;
  variance?: Maybe<Log_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "log" */
export type Log_Arr_Rel_Insert_Input = {
  data: Array<Log_Insert_Input>;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** aggregate avg on columns */
export type Log_Avg_Fields = {
  __typename?: "log_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "log" */
export type Log_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "log". All fields are combined with a logical 'AND'. */
export type Log_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Log_Bool_Exp>>>;
  _not?: Maybe<Log_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Log_Bool_Exp>>>;
  accept_language?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  device_type?: Maybe<String_Comparison_Exp>;
  group?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_group?: Maybe<Int_Comparison_Exp>;
  ip?: Maybe<String_Comparison_Exp>;
  user_agent?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "log" */
export enum Log_Constraint {
  /** unique or primary key constraint */
  LogsPkey = "logs_pkey",
}

/** input type for incrementing integer column in table "log" */
export type Log_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  id_group?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "log" */
export type Log_Insert_Input = {
  accept_language?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Log_Max_Fields = {
  __typename?: "log_max_fields";
  accept_language?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "log" */
export type Log_Max_Order_By = {
  accept_language?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Log_Min_Fields = {
  __typename?: "log_min_fields";
  accept_language?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "log" */
export type Log_Min_Order_By = {
  accept_language?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
};

/** response of any mutation on the table "log" */
export type Log_Mutation_Response = {
  __typename?: "log_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Log>;
};

/** input type for inserting object relation for remote table "log" */
export type Log_Obj_Rel_Insert_Input = {
  data: Log_Insert_Input;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** on conflict condition type for table "log" */
export type Log_On_Conflict = {
  constraint: Log_Constraint;
  update_columns: Array<Log_Update_Column>;
  where?: Maybe<Log_Bool_Exp>;
};

/** ordering options when selecting data from "log" */
export type Log_Order_By = {
  accept_language?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
  group?: Maybe<Group_Order_By>;
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
};

/** primary key columns input for table: "log" */
export type Log_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "log" */
export enum Log_Select_Column {
  /** column name */
  AcceptLanguage = "accept_language",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeviceType = "device_type",
  /** column name */
  Id = "id",
  /** column name */
  IdGroup = "id_group",
  /** column name */
  Ip = "ip",
  /** column name */
  UserAgent = "user_agent",
}

/** input type for updating data in table "log" */
export type Log_Set_Input = {
  accept_language?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "log_spread" */
export type Log_Spread = {
  __typename?: "log_spread";
  accept_language?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  company_name?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "log_spread" */
export type Log_Spread_Aggregate = {
  __typename?: "log_spread_aggregate";
  aggregate?: Maybe<Log_Spread_Aggregate_Fields>;
  nodes: Array<Log_Spread>;
};

/** aggregate fields of "log_spread" */
export type Log_Spread_Aggregate_Fields = {
  __typename?: "log_spread_aggregate_fields";
  avg?: Maybe<Log_Spread_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Log_Spread_Max_Fields>;
  min?: Maybe<Log_Spread_Min_Fields>;
  stddev?: Maybe<Log_Spread_Stddev_Fields>;
  stddev_pop?: Maybe<Log_Spread_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Log_Spread_Stddev_Samp_Fields>;
  sum?: Maybe<Log_Spread_Sum_Fields>;
  var_pop?: Maybe<Log_Spread_Var_Pop_Fields>;
  var_samp?: Maybe<Log_Spread_Var_Samp_Fields>;
  variance?: Maybe<Log_Spread_Variance_Fields>;
};

/** aggregate fields of "log_spread" */
export type Log_Spread_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Log_Spread_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "log_spread" */
export type Log_Spread_Aggregate_Order_By = {
  avg?: Maybe<Log_Spread_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Log_Spread_Max_Order_By>;
  min?: Maybe<Log_Spread_Min_Order_By>;
  stddev?: Maybe<Log_Spread_Stddev_Order_By>;
  stddev_pop?: Maybe<Log_Spread_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Log_Spread_Stddev_Samp_Order_By>;
  sum?: Maybe<Log_Spread_Sum_Order_By>;
  var_pop?: Maybe<Log_Spread_Var_Pop_Order_By>;
  var_samp?: Maybe<Log_Spread_Var_Samp_Order_By>;
  variance?: Maybe<Log_Spread_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Log_Spread_Avg_Fields = {
  __typename?: "log_spread_avg_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "log_spread" */
export type Log_Spread_Avg_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "log_spread". All fields are combined with a logical 'AND'. */
export type Log_Spread_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Log_Spread_Bool_Exp>>>;
  _not?: Maybe<Log_Spread_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Log_Spread_Bool_Exp>>>;
  accept_language?: Maybe<String_Comparison_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  device_type?: Maybe<String_Comparison_Exp>;
  id_group?: Maybe<Int_Comparison_Exp>;
  ip?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user_agent?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Log_Spread_Max_Fields = {
  __typename?: "log_spread_max_fields";
  accept_language?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  company_name?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "log_spread" */
export type Log_Spread_Max_Order_By = {
  accept_language?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Log_Spread_Min_Fields = {
  __typename?: "log_spread_min_fields";
  accept_language?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  company_name?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  device_type?: Maybe<Scalars["String"]>;
  id_group?: Maybe<Scalars["Int"]>;
  ip?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  user_agent?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "log_spread" */
export type Log_Spread_Min_Order_By = {
  accept_language?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
};

/** ordering options when selecting data from "log_spread" */
export type Log_Spread_Order_By = {
  accept_language?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
};

/** select columns of table "log_spread" */
export enum Log_Spread_Select_Column {
  /** column name */
  AcceptLanguage = "accept_language",
  /** column name */
  Address = "address",
  /** column name */
  CompanyName = "company_name",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeviceType = "device_type",
  /** column name */
  IdGroup = "id_group",
  /** column name */
  Ip = "ip",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
  /** column name */
  UserAgent = "user_agent",
}

/** aggregate stddev on columns */
export type Log_Spread_Stddev_Fields = {
  __typename?: "log_spread_stddev_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "log_spread" */
export type Log_Spread_Stddev_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Log_Spread_Stddev_Pop_Fields = {
  __typename?: "log_spread_stddev_pop_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "log_spread" */
export type Log_Spread_Stddev_Pop_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Log_Spread_Stddev_Samp_Fields = {
  __typename?: "log_spread_stddev_samp_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "log_spread" */
export type Log_Spread_Stddev_Samp_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Log_Spread_Sum_Fields = {
  __typename?: "log_spread_sum_fields";
  id_group?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "log_spread" */
export type Log_Spread_Sum_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Log_Spread_Var_Pop_Fields = {
  __typename?: "log_spread_var_pop_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "log_spread" */
export type Log_Spread_Var_Pop_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Log_Spread_Var_Samp_Fields = {
  __typename?: "log_spread_var_samp_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "log_spread" */
export type Log_Spread_Var_Samp_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Log_Spread_Variance_Fields = {
  __typename?: "log_spread_variance_fields";
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "log_spread" */
export type Log_Spread_Variance_Order_By = {
  id_group?: Maybe<Order_By>;
};

/** aggregate stddev on columns */
export type Log_Stddev_Fields = {
  __typename?: "log_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "log" */
export type Log_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Log_Stddev_Pop_Fields = {
  __typename?: "log_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "log" */
export type Log_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Log_Stddev_Samp_Fields = {
  __typename?: "log_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "log" */
export type Log_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Log_Sum_Fields = {
  __typename?: "log_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  id_group?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "log" */
export type Log_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** update columns of table "log" */
export enum Log_Update_Column {
  /** column name */
  AcceptLanguage = "accept_language",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeviceType = "device_type",
  /** column name */
  Id = "id",
  /** column name */
  IdGroup = "id_group",
  /** column name */
  Ip = "ip",
  /** column name */
  UserAgent = "user_agent",
}

/** aggregate var_pop on columns */
export type Log_Var_Pop_Fields = {
  __typename?: "log_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "log" */
export type Log_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Log_Var_Samp_Fields = {
  __typename?: "log_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "log" */
export type Log_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Log_Variance_Fields = {
  __typename?: "log_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  id_group?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "log" */
export type Log_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_group?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "code" */
  delete_code?: Maybe<Code_Mutation_Response>;
  /** delete single row from the table: "code" */
  delete_code_by_pk?: Maybe<Code>;
  /** delete data from the table: "company" */
  delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  delete_company_by_pk?: Maybe<Company>;
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "link" */
  delete_link?: Maybe<Link_Mutation_Response>;
  /** delete single row from the table: "link" */
  delete_link_by_pk?: Maybe<Link>;
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "pair_tracker" */
  delete_pair_tracker?: Maybe<Pair_Tracker_Mutation_Response>;
  /** delete single row from the table: "pair_tracker" */
  delete_pair_tracker_by_pk?: Maybe<Pair_Tracker>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** insert data into the table: "code" */
  insert_code?: Maybe<Code_Mutation_Response>;
  /** insert a single row into the table: "code" */
  insert_code_one?: Maybe<Code>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "link" */
  insert_link?: Maybe<Link_Mutation_Response>;
  /** insert a single row into the table: "link" */
  insert_link_one?: Maybe<Link>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "pair_tracker" */
  insert_pair_tracker?: Maybe<Pair_Tracker_Mutation_Response>;
  /** insert a single row into the table: "pair_tracker" */
  insert_pair_tracker_one?: Maybe<Pair_Tracker>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** update data of the table: "code" */
  update_code?: Maybe<Code_Mutation_Response>;
  /** update single row of the table: "code" */
  update_code_by_pk?: Maybe<Code>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update data of the table: "link" */
  update_link?: Maybe<Link_Mutation_Response>;
  /** update single row of the table: "link" */
  update_link_by_pk?: Maybe<Link>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update data of the table: "pair_tracker" */
  update_pair_tracker?: Maybe<Pair_Tracker_Mutation_Response>;
  /** update single row of the table: "pair_tracker" */
  update_pair_tracker_by_pk?: Maybe<Pair_Tracker>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
};

/** mutation root */
export type Mutation_RootDelete_CodeArgs = {
  where: Code_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Code_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_LinkArgs = {
  where: Link_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Link_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_LogArgs = {
  where: Log_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Log_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_Pair_TrackerArgs = {
  where: Pair_Tracker_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Pair_Tracker_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_CodeArgs = {
  objects: Array<Code_Insert_Input>;
  on_conflict?: Maybe<Code_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Code_OneArgs = {
  object: Code_Insert_Input;
  on_conflict?: Maybe<Code_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: Array<Company_Insert_Input>;
  on_conflict?: Maybe<Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: Maybe<Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LinkArgs = {
  objects: Array<Link_Insert_Input>;
  on_conflict?: Maybe<Link_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Link_OneArgs = {
  object: Link_Insert_Input;
  on_conflict?: Maybe<Link_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: Maybe<Location_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: Maybe<Location_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LogArgs = {
  objects: Array<Log_Insert_Input>;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Log_OneArgs = {
  object: Log_Insert_Input;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Pair_TrackerArgs = {
  objects: Array<Pair_Tracker_Insert_Input>;
  on_conflict?: Maybe<Pair_Tracker_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Pair_Tracker_OneArgs = {
  object: Pair_Tracker_Insert_Input;
  on_conflict?: Maybe<Pair_Tracker_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CodeArgs = {
  _inc?: Maybe<Code_Inc_Input>;
  _set?: Maybe<Code_Set_Input>;
  where: Code_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Code_By_PkArgs = {
  _inc?: Maybe<Code_Inc_Input>;
  _set?: Maybe<Code_Set_Input>;
  pk_columns: Code_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _inc?: Maybe<Company_Inc_Input>;
  _set?: Maybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _inc?: Maybe<Company_Inc_Input>;
  _set?: Maybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LinkArgs = {
  _inc?: Maybe<Link_Inc_Input>;
  _set?: Maybe<Link_Set_Input>;
  where: Link_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Link_By_PkArgs = {
  _inc?: Maybe<Link_Inc_Input>;
  _set?: Maybe<Link_Set_Input>;
  pk_columns: Link_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: Maybe<Location_Inc_Input>;
  _set?: Maybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: Maybe<Location_Inc_Input>;
  _set?: Maybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LogArgs = {
  _inc?: Maybe<Log_Inc_Input>;
  _set?: Maybe<Log_Set_Input>;
  where: Log_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Log_By_PkArgs = {
  _inc?: Maybe<Log_Inc_Input>;
  _set?: Maybe<Log_Set_Input>;
  pk_columns: Log_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Pair_TrackerArgs = {
  _inc?: Maybe<Pair_Tracker_Inc_Input>;
  _set?: Maybe<Pair_Tracker_Set_Input>;
  where: Pair_Tracker_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Pair_Tracker_By_PkArgs = {
  _inc?: Maybe<Pair_Tracker_Inc_Input>;
  _set?: Maybe<Pair_Tracker_Set_Input>;
  pk_columns: Pair_Tracker_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: Maybe<Product_Inc_Input>;
  _set?: Maybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: Maybe<Product_Inc_Input>;
  _set?: Maybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "pair_tracker" */
export type Pair_Tracker = {
  __typename?: "pair_tracker";
  /** An object relationship */
  code1: Code;
  /** An object relationship */
  code2: Code;
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregated array relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars["Int"];
  id_code_1: Scalars["Int"];
  id_code_2: Scalars["Int"];
};

/** columns and relationships of "pair_tracker" */
export type Pair_TrackerGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** columns and relationships of "pair_tracker" */
export type Pair_TrackerGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** aggregated selection of "pair_tracker" */
export type Pair_Tracker_Aggregate = {
  __typename?: "pair_tracker_aggregate";
  aggregate?: Maybe<Pair_Tracker_Aggregate_Fields>;
  nodes: Array<Pair_Tracker>;
};

/** aggregate fields of "pair_tracker" */
export type Pair_Tracker_Aggregate_Fields = {
  __typename?: "pair_tracker_aggregate_fields";
  avg?: Maybe<Pair_Tracker_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Pair_Tracker_Max_Fields>;
  min?: Maybe<Pair_Tracker_Min_Fields>;
  stddev?: Maybe<Pair_Tracker_Stddev_Fields>;
  stddev_pop?: Maybe<Pair_Tracker_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pair_Tracker_Stddev_Samp_Fields>;
  sum?: Maybe<Pair_Tracker_Sum_Fields>;
  var_pop?: Maybe<Pair_Tracker_Var_Pop_Fields>;
  var_samp?: Maybe<Pair_Tracker_Var_Samp_Fields>;
  variance?: Maybe<Pair_Tracker_Variance_Fields>;
};

/** aggregate fields of "pair_tracker" */
export type Pair_Tracker_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pair_Tracker_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "pair_tracker" */
export type Pair_Tracker_Aggregate_Order_By = {
  avg?: Maybe<Pair_Tracker_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pair_Tracker_Max_Order_By>;
  min?: Maybe<Pair_Tracker_Min_Order_By>;
  stddev?: Maybe<Pair_Tracker_Stddev_Order_By>;
  stddev_pop?: Maybe<Pair_Tracker_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pair_Tracker_Stddev_Samp_Order_By>;
  sum?: Maybe<Pair_Tracker_Sum_Order_By>;
  var_pop?: Maybe<Pair_Tracker_Var_Pop_Order_By>;
  var_samp?: Maybe<Pair_Tracker_Var_Samp_Order_By>;
  variance?: Maybe<Pair_Tracker_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pair_tracker" */
export type Pair_Tracker_Arr_Rel_Insert_Input = {
  data: Array<Pair_Tracker_Insert_Input>;
  on_conflict?: Maybe<Pair_Tracker_On_Conflict>;
};

/** aggregate avg on columns */
export type Pair_Tracker_Avg_Fields = {
  __typename?: "pair_tracker_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "pair_tracker" */
export type Pair_Tracker_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pair_tracker". All fields are combined with a logical 'AND'. */
export type Pair_Tracker_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Pair_Tracker_Bool_Exp>>>;
  _not?: Maybe<Pair_Tracker_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Pair_Tracker_Bool_Exp>>>;
  code1?: Maybe<Code_Bool_Exp>;
  code2?: Maybe<Code_Bool_Exp>;
  groups?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_code_1?: Maybe<Int_Comparison_Exp>;
  id_code_2?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pair_tracker" */
export enum Pair_Tracker_Constraint {
  /** unique or primary key constraint */
  PairTrackerPkey = "pair_tracker_pkey",
}

/** input type for incrementing integer column in table "pair_tracker" */
export type Pair_Tracker_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  id_code_1?: Maybe<Scalars["Int"]>;
  id_code_2?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "pair_tracker" */
export type Pair_Tracker_Insert_Input = {
  code1?: Maybe<Code_Obj_Rel_Insert_Input>;
  code2?: Maybe<Code_Obj_Rel_Insert_Input>;
  groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  id_code_1?: Maybe<Scalars["Int"]>;
  id_code_2?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Pair_Tracker_Max_Fields = {
  __typename?: "pair_tracker_max_fields";
  id?: Maybe<Scalars["Int"]>;
  id_code_1?: Maybe<Scalars["Int"]>;
  id_code_2?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "pair_tracker" */
export type Pair_Tracker_Max_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pair_Tracker_Min_Fields = {
  __typename?: "pair_tracker_min_fields";
  id?: Maybe<Scalars["Int"]>;
  id_code_1?: Maybe<Scalars["Int"]>;
  id_code_2?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "pair_tracker" */
export type Pair_Tracker_Min_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** response of any mutation on the table "pair_tracker" */
export type Pair_Tracker_Mutation_Response = {
  __typename?: "pair_tracker_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Pair_Tracker>;
};

/** input type for inserting object relation for remote table "pair_tracker" */
export type Pair_Tracker_Obj_Rel_Insert_Input = {
  data: Pair_Tracker_Insert_Input;
  on_conflict?: Maybe<Pair_Tracker_On_Conflict>;
};

/** on conflict condition type for table "pair_tracker" */
export type Pair_Tracker_On_Conflict = {
  constraint: Pair_Tracker_Constraint;
  update_columns: Array<Pair_Tracker_Update_Column>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** ordering options when selecting data from "pair_tracker" */
export type Pair_Tracker_Order_By = {
  code1?: Maybe<Code_Order_By>;
  code2?: Maybe<Code_Order_By>;
  groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** primary key columns input for table: "pair_tracker" */
export type Pair_Tracker_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "pair_tracker" */
export enum Pair_Tracker_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  IdCode_1 = "id_code_1",
  /** column name */
  IdCode_2 = "id_code_2",
}

/** input type for updating data in table "pair_tracker" */
export type Pair_Tracker_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  id_code_1?: Maybe<Scalars["Int"]>;
  id_code_2?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Pair_Tracker_Stddev_Fields = {
  __typename?: "pair_tracker_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "pair_tracker" */
export type Pair_Tracker_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pair_Tracker_Stddev_Pop_Fields = {
  __typename?: "pair_tracker_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "pair_tracker" */
export type Pair_Tracker_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pair_Tracker_Stddev_Samp_Fields = {
  __typename?: "pair_tracker_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "pair_tracker" */
export type Pair_Tracker_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Pair_Tracker_Sum_Fields = {
  __typename?: "pair_tracker_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  id_code_1?: Maybe<Scalars["Int"]>;
  id_code_2?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "pair_tracker" */
export type Pair_Tracker_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** update columns of table "pair_tracker" */
export enum Pair_Tracker_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  IdCode_1 = "id_code_1",
  /** column name */
  IdCode_2 = "id_code_2",
}

/** aggregate var_pop on columns */
export type Pair_Tracker_Var_Pop_Fields = {
  __typename?: "pair_tracker_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "pair_tracker" */
export type Pair_Tracker_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pair_Tracker_Var_Samp_Fields = {
  __typename?: "pair_tracker_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "pair_tracker" */
export type Pair_Tracker_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pair_Tracker_Variance_Fields = {
  __typename?: "pair_tracker_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  id_code_1?: Maybe<Scalars["Float"]>;
  id_code_2?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "pair_tracker" */
export type Pair_Tracker_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_code_1?: Maybe<Order_By>;
  id_code_2?: Maybe<Order_By>;
};

/** columns and relationships of "phone_popularity" */
export type Phone_Popularity = {
  __typename?: "phone_popularity";
  count?: Maybe<Scalars["bigint"]>;
  device_type?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "phone_popularity" */
export type Phone_Popularity_Aggregate = {
  __typename?: "phone_popularity_aggregate";
  aggregate?: Maybe<Phone_Popularity_Aggregate_Fields>;
  nodes: Array<Phone_Popularity>;
};

/** aggregate fields of "phone_popularity" */
export type Phone_Popularity_Aggregate_Fields = {
  __typename?: "phone_popularity_aggregate_fields";
  avg?: Maybe<Phone_Popularity_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Phone_Popularity_Max_Fields>;
  min?: Maybe<Phone_Popularity_Min_Fields>;
  stddev?: Maybe<Phone_Popularity_Stddev_Fields>;
  stddev_pop?: Maybe<Phone_Popularity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Phone_Popularity_Stddev_Samp_Fields>;
  sum?: Maybe<Phone_Popularity_Sum_Fields>;
  var_pop?: Maybe<Phone_Popularity_Var_Pop_Fields>;
  var_samp?: Maybe<Phone_Popularity_Var_Samp_Fields>;
  variance?: Maybe<Phone_Popularity_Variance_Fields>;
};

/** aggregate fields of "phone_popularity" */
export type Phone_Popularity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Phone_Popularity_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "phone_popularity" */
export type Phone_Popularity_Aggregate_Order_By = {
  avg?: Maybe<Phone_Popularity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Phone_Popularity_Max_Order_By>;
  min?: Maybe<Phone_Popularity_Min_Order_By>;
  stddev?: Maybe<Phone_Popularity_Stddev_Order_By>;
  stddev_pop?: Maybe<Phone_Popularity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Phone_Popularity_Stddev_Samp_Order_By>;
  sum?: Maybe<Phone_Popularity_Sum_Order_By>;
  var_pop?: Maybe<Phone_Popularity_Var_Pop_Order_By>;
  var_samp?: Maybe<Phone_Popularity_Var_Samp_Order_By>;
  variance?: Maybe<Phone_Popularity_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Phone_Popularity_Avg_Fields = {
  __typename?: "phone_popularity_avg_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "phone_popularity" */
export type Phone_Popularity_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "phone_popularity". All fields are combined with a logical 'AND'. */
export type Phone_Popularity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Phone_Popularity_Bool_Exp>>>;
  _not?: Maybe<Phone_Popularity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Phone_Popularity_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  device_type?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Phone_Popularity_Max_Fields = {
  __typename?: "phone_popularity_max_fields";
  count?: Maybe<Scalars["bigint"]>;
  device_type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "phone_popularity" */
export type Phone_Popularity_Max_Order_By = {
  count?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Phone_Popularity_Min_Fields = {
  __typename?: "phone_popularity_min_fields";
  count?: Maybe<Scalars["bigint"]>;
  device_type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "phone_popularity" */
export type Phone_Popularity_Min_Order_By = {
  count?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
};

/** ordering options when selecting data from "phone_popularity" */
export type Phone_Popularity_Order_By = {
  count?: Maybe<Order_By>;
  device_type?: Maybe<Order_By>;
};

/** select columns of table "phone_popularity" */
export enum Phone_Popularity_Select_Column {
  /** column name */
  Count = "count",
  /** column name */
  DeviceType = "device_type",
}

/** aggregate stddev on columns */
export type Phone_Popularity_Stddev_Fields = {
  __typename?: "phone_popularity_stddev_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "phone_popularity" */
export type Phone_Popularity_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Phone_Popularity_Stddev_Pop_Fields = {
  __typename?: "phone_popularity_stddev_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "phone_popularity" */
export type Phone_Popularity_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Phone_Popularity_Stddev_Samp_Fields = {
  __typename?: "phone_popularity_stddev_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "phone_popularity" */
export type Phone_Popularity_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Phone_Popularity_Sum_Fields = {
  __typename?: "phone_popularity_sum_fields";
  count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "phone_popularity" */
export type Phone_Popularity_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Phone_Popularity_Var_Pop_Fields = {
  __typename?: "phone_popularity_var_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "phone_popularity" */
export type Phone_Popularity_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Phone_Popularity_Var_Samp_Fields = {
  __typename?: "phone_popularity_var_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "phone_popularity" */
export type Phone_Popularity_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Phone_Popularity_Variance_Fields = {
  __typename?: "phone_popularity_variance_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "phone_popularity" */
export type Phone_Popularity_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: "product";
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregated array relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars["Int"];
  name: Scalars["String"];
};

/** columns and relationships of "product" */
export type ProductGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: "product_aggregate";
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: "product_aggregate_fields";
  avg?: Maybe<Product_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: Maybe<Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Max_Order_By>;
  min?: Maybe<Product_Min_Order_By>;
  stddev?: Maybe<Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Sum_Order_By>;
  var_pop?: Maybe<Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Var_Samp_Order_By>;
  variance?: Maybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: "product_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Bool_Exp>>>;
  _not?: Maybe<Product_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Bool_Exp>>>;
  groups?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = "product_pkey",
}

/** input type for incrementing integer column in table "product" */
export type Product_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: "product_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: "product_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: "product_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** on conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns: Array<Product_Update_Column>;
  where?: Maybe<Product_Bool_Exp>;
};

/** ordering options when selecting data from "product" */
export type Product_Order_By = {
  groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "product" */
export type Product_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** columns and relationships of "product_popularity" */
export type Product_Popularity = {
  __typename?: "product_popularity";
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "product_popularity" */
export type Product_Popularity_Aggregate = {
  __typename?: "product_popularity_aggregate";
  aggregate?: Maybe<Product_Popularity_Aggregate_Fields>;
  nodes: Array<Product_Popularity>;
};

/** aggregate fields of "product_popularity" */
export type Product_Popularity_Aggregate_Fields = {
  __typename?: "product_popularity_aggregate_fields";
  avg?: Maybe<Product_Popularity_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Product_Popularity_Max_Fields>;
  min?: Maybe<Product_Popularity_Min_Fields>;
  stddev?: Maybe<Product_Popularity_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Popularity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Popularity_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Popularity_Sum_Fields>;
  var_pop?: Maybe<Product_Popularity_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Popularity_Var_Samp_Fields>;
  variance?: Maybe<Product_Popularity_Variance_Fields>;
};

/** aggregate fields of "product_popularity" */
export type Product_Popularity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Popularity_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "product_popularity" */
export type Product_Popularity_Aggregate_Order_By = {
  avg?: Maybe<Product_Popularity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Popularity_Max_Order_By>;
  min?: Maybe<Product_Popularity_Min_Order_By>;
  stddev?: Maybe<Product_Popularity_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Popularity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Popularity_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Popularity_Sum_Order_By>;
  var_pop?: Maybe<Product_Popularity_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Popularity_Var_Samp_Order_By>;
  variance?: Maybe<Product_Popularity_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Product_Popularity_Avg_Fields = {
  __typename?: "product_popularity_avg_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "product_popularity" */
export type Product_Popularity_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_popularity". All fields are combined with a logical 'AND'. */
export type Product_Popularity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Popularity_Bool_Exp>>>;
  _not?: Maybe<Product_Popularity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Popularity_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Product_Popularity_Max_Fields = {
  __typename?: "product_popularity_max_fields";
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "product_popularity" */
export type Product_Popularity_Max_Order_By = {
  count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Popularity_Min_Fields = {
  __typename?: "product_popularity_min_fields";
  count?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "product_popularity" */
export type Product_Popularity_Min_Order_By = {
  count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** ordering options when selecting data from "product_popularity" */
export type Product_Popularity_Order_By = {
  count?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "product_popularity" */
export enum Product_Popularity_Select_Column {
  /** column name */
  Count = "count",
  /** column name */
  Name = "name",
}

/** aggregate stddev on columns */
export type Product_Popularity_Stddev_Fields = {
  __typename?: "product_popularity_stddev_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "product_popularity" */
export type Product_Popularity_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Popularity_Stddev_Pop_Fields = {
  __typename?: "product_popularity_stddev_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "product_popularity" */
export type Product_Popularity_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Popularity_Stddev_Samp_Fields = {
  __typename?: "product_popularity_stddev_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "product_popularity" */
export type Product_Popularity_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Popularity_Sum_Fields = {
  __typename?: "product_popularity_sum_fields";
  count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "product_popularity" */
export type Product_Popularity_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Product_Popularity_Var_Pop_Fields = {
  __typename?: "product_popularity_var_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "product_popularity" */
export type Product_Popularity_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Popularity_Var_Samp_Fields = {
  __typename?: "product_popularity_var_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "product_popularity" */
export type Product_Popularity_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Popularity_Variance_Fields = {
  __typename?: "product_popularity_variance_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "product_popularity" */
export type Product_Popularity_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: "product_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: "product_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: "product_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: "product_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: "product_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: "product_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: "product_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "code" */
  code: Array<Code>;
  /** fetch aggregated fields from the table: "code" */
  code_aggregate: Code_Aggregate;
  /** fetch data from the table: "code" using primary key columns */
  code_by_pk?: Maybe<Code>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "company_engagement" */
  company_engagement: Array<Company_Engagement>;
  /** fetch aggregated fields from the table: "company_engagement" */
  company_engagement_aggregate: Company_Engagement_Aggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "link" */
  link: Array<Link>;
  /** fetch aggregated fields from the table: "link" */
  link_aggregate: Link_Aggregate;
  /** fetch data from the table: "link" using primary key columns */
  link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "location_engagement" */
  location_engagement: Array<Location_Engagement>;
  /** fetch aggregated fields from the table: "location_engagement" */
  location_engagement_aggregate: Location_Engagement_Aggregate;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "log_spread" */
  log_spread: Array<Log_Spread>;
  /** fetch aggregated fields from the table: "log_spread" */
  log_spread_aggregate: Log_Spread_Aggregate;
  /** fetch data from the table: "pair_tracker" */
  pair_tracker: Array<Pair_Tracker>;
  /** fetch aggregated fields from the table: "pair_tracker" */
  pair_tracker_aggregate: Pair_Tracker_Aggregate;
  /** fetch data from the table: "pair_tracker" using primary key columns */
  pair_tracker_by_pk?: Maybe<Pair_Tracker>;
  /** fetch data from the table: "phone_popularity" */
  phone_popularity: Array<Phone_Popularity>;
  /** fetch aggregated fields from the table: "phone_popularity" */
  phone_popularity_aggregate: Phone_Popularity_Aggregate;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_popularity" */
  product_popularity: Array<Product_Popularity>;
  /** fetch aggregated fields from the table: "product_popularity" */
  product_popularity_aggregate: Product_Popularity_Aggregate;
  /** fetch data from the table: "tag_popularity" */
  tag_popularity: Array<Tag_Popularity>;
  /** fetch aggregated fields from the table: "tag_popularity" */
  tag_popularity_aggregate: Tag_Popularity_Aggregate;
};

/** query root */
export type Query_RootCodeArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
};

/** query root */
export type Query_RootCode_AggregateArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
};

/** query root */
export type Query_RootCode_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootCompanyArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};

/** query root */
export type Query_RootCompany_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};

/** query root */
export type Query_RootCompany_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootCompany_EngagementArgs = {
  distinct_on?: Maybe<Array<Company_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Engagement_Order_By>>;
  where?: Maybe<Company_Engagement_Bool_Exp>;
};

/** query root */
export type Query_RootCompany_Engagement_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Engagement_Order_By>>;
  where?: Maybe<Company_Engagement_Bool_Exp>;
};

/** query root */
export type Query_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** query root */
export type Query_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** query root */
export type Query_RootGroup_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootLinkArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

/** query root */
export type Query_RootLink_AggregateArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

/** query root */
export type Query_RootLink_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootLocationArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};

/** query root */
export type Query_RootLocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};

/** query root */
export type Query_RootLocation_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootLocation_EngagementArgs = {
  distinct_on?: Maybe<Array<Location_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Engagement_Order_By>>;
  where?: Maybe<Location_Engagement_Bool_Exp>;
};

/** query root */
export type Query_RootLocation_Engagement_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Engagement_Order_By>>;
  where?: Maybe<Location_Engagement_Bool_Exp>;
};

/** query root */
export type Query_RootLogArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};

/** query root */
export type Query_RootLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};

/** query root */
export type Query_RootLog_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootLog_SpreadArgs = {
  distinct_on?: Maybe<Array<Log_Spread_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Spread_Order_By>>;
  where?: Maybe<Log_Spread_Bool_Exp>;
};

/** query root */
export type Query_RootLog_Spread_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Spread_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Spread_Order_By>>;
  where?: Maybe<Log_Spread_Bool_Exp>;
};

/** query root */
export type Query_RootPair_TrackerArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** query root */
export type Query_RootPair_Tracker_AggregateArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** query root */
export type Query_RootPair_Tracker_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootPhone_PopularityArgs = {
  distinct_on?: Maybe<Array<Phone_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Phone_Popularity_Order_By>>;
  where?: Maybe<Phone_Popularity_Bool_Exp>;
};

/** query root */
export type Query_RootPhone_Popularity_AggregateArgs = {
  distinct_on?: Maybe<Array<Phone_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Phone_Popularity_Order_By>>;
  where?: Maybe<Phone_Popularity_Bool_Exp>;
};

/** query root */
export type Query_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};

/** query root */
export type Query_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};

/** query root */
export type Query_RootProduct_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootProduct_PopularityArgs = {
  distinct_on?: Maybe<Array<Product_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Popularity_Order_By>>;
  where?: Maybe<Product_Popularity_Bool_Exp>;
};

/** query root */
export type Query_RootProduct_Popularity_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Popularity_Order_By>>;
  where?: Maybe<Product_Popularity_Bool_Exp>;
};

/** query root */
export type Query_RootTag_PopularityArgs = {
  distinct_on?: Maybe<Array<Tag_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Popularity_Order_By>>;
  where?: Maybe<Tag_Popularity_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Popularity_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Popularity_Order_By>>;
  where?: Maybe<Tag_Popularity_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "code" */
  code: Array<Code>;
  /** fetch aggregated fields from the table: "code" */
  code_aggregate: Code_Aggregate;
  /** fetch data from the table: "code" using primary key columns */
  code_by_pk?: Maybe<Code>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "company_engagement" */
  company_engagement: Array<Company_Engagement>;
  /** fetch aggregated fields from the table: "company_engagement" */
  company_engagement_aggregate: Company_Engagement_Aggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "link" */
  link: Array<Link>;
  /** fetch aggregated fields from the table: "link" */
  link_aggregate: Link_Aggregate;
  /** fetch data from the table: "link" using primary key columns */
  link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "location_engagement" */
  location_engagement: Array<Location_Engagement>;
  /** fetch aggregated fields from the table: "location_engagement" */
  location_engagement_aggregate: Location_Engagement_Aggregate;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "log_spread" */
  log_spread: Array<Log_Spread>;
  /** fetch aggregated fields from the table: "log_spread" */
  log_spread_aggregate: Log_Spread_Aggregate;
  /** fetch data from the table: "pair_tracker" */
  pair_tracker: Array<Pair_Tracker>;
  /** fetch aggregated fields from the table: "pair_tracker" */
  pair_tracker_aggregate: Pair_Tracker_Aggregate;
  /** fetch data from the table: "pair_tracker" using primary key columns */
  pair_tracker_by_pk?: Maybe<Pair_Tracker>;
  /** fetch data from the table: "phone_popularity" */
  phone_popularity: Array<Phone_Popularity>;
  /** fetch aggregated fields from the table: "phone_popularity" */
  phone_popularity_aggregate: Phone_Popularity_Aggregate;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_popularity" */
  product_popularity: Array<Product_Popularity>;
  /** fetch aggregated fields from the table: "product_popularity" */
  product_popularity_aggregate: Product_Popularity_Aggregate;
  /** fetch data from the table: "tag_popularity" */
  tag_popularity: Array<Tag_Popularity>;
  /** fetch aggregated fields from the table: "tag_popularity" */
  tag_popularity_aggregate: Tag_Popularity_Aggregate;
};

/** subscription root */
export type Subscription_RootCodeArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCode_AggregateArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Code_Order_By>>;
  where?: Maybe<Code_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCode_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootCompanyArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootCompany_EngagementArgs = {
  distinct_on?: Maybe<Array<Company_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Engagement_Order_By>>;
  where?: Maybe<Company_Engagement_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCompany_Engagement_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Company_Engagement_Order_By>>;
  where?: Maybe<Company_Engagement_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootLinkArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLink_AggregateArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLink_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootLocationArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Order_By>>;
  where?: Maybe<Location_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootLocation_EngagementArgs = {
  distinct_on?: Maybe<Array<Location_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Engagement_Order_By>>;
  where?: Maybe<Location_Engagement_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLocation_Engagement_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Engagement_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Location_Engagement_Order_By>>;
  where?: Maybe<Location_Engagement_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLogArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLog_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootLog_SpreadArgs = {
  distinct_on?: Maybe<Array<Log_Spread_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Spread_Order_By>>;
  where?: Maybe<Log_Spread_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootLog_Spread_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Spread_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Log_Spread_Order_By>>;
  where?: Maybe<Log_Spread_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPair_TrackerArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPair_Tracker_AggregateArgs = {
  distinct_on?: Maybe<Array<Pair_Tracker_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Pair_Tracker_Order_By>>;
  where?: Maybe<Pair_Tracker_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPair_Tracker_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootPhone_PopularityArgs = {
  distinct_on?: Maybe<Array<Phone_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Phone_Popularity_Order_By>>;
  where?: Maybe<Phone_Popularity_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPhone_Popularity_AggregateArgs = {
  distinct_on?: Maybe<Array<Phone_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Phone_Popularity_Order_By>>;
  where?: Maybe<Phone_Popularity_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootProduct_PopularityArgs = {
  distinct_on?: Maybe<Array<Product_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Popularity_Order_By>>;
  where?: Maybe<Product_Popularity_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootProduct_Popularity_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Product_Popularity_Order_By>>;
  where?: Maybe<Product_Popularity_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_PopularityArgs = {
  distinct_on?: Maybe<Array<Tag_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Popularity_Order_By>>;
  where?: Maybe<Tag_Popularity_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Popularity_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Popularity_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Popularity_Order_By>>;
  where?: Maybe<Tag_Popularity_Bool_Exp>;
};

/** columns and relationships of "tag_popularity" */
export type Tag_Popularity = {
  __typename?: "tag_popularity";
  count?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "tag_popularity" */
export type Tag_Popularity_Aggregate = {
  __typename?: "tag_popularity_aggregate";
  aggregate?: Maybe<Tag_Popularity_Aggregate_Fields>;
  nodes: Array<Tag_Popularity>;
};

/** aggregate fields of "tag_popularity" */
export type Tag_Popularity_Aggregate_Fields = {
  __typename?: "tag_popularity_aggregate_fields";
  avg?: Maybe<Tag_Popularity_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Popularity_Max_Fields>;
  min?: Maybe<Tag_Popularity_Min_Fields>;
  stddev?: Maybe<Tag_Popularity_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Popularity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Popularity_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Popularity_Sum_Fields>;
  var_pop?: Maybe<Tag_Popularity_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Popularity_Var_Samp_Fields>;
  variance?: Maybe<Tag_Popularity_Variance_Fields>;
};

/** aggregate fields of "tag_popularity" */
export type Tag_Popularity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Popularity_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tag_popularity" */
export type Tag_Popularity_Aggregate_Order_By = {
  avg?: Maybe<Tag_Popularity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Popularity_Max_Order_By>;
  min?: Maybe<Tag_Popularity_Min_Order_By>;
  stddev?: Maybe<Tag_Popularity_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Popularity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Popularity_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Popularity_Sum_Order_By>;
  var_pop?: Maybe<Tag_Popularity_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Popularity_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Popularity_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Tag_Popularity_Avg_Fields = {
  __typename?: "tag_popularity_avg_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tag_popularity" */
export type Tag_Popularity_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag_popularity". All fields are combined with a logical 'AND'. */
export type Tag_Popularity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Popularity_Bool_Exp>>>;
  _not?: Maybe<Tag_Popularity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Popularity_Bool_Exp>>>;
  count?: Maybe<Bigint_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Tag_Popularity_Max_Fields = {
  __typename?: "tag_popularity_max_fields";
  count?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "tag_popularity" */
export type Tag_Popularity_Max_Order_By = {
  count?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Popularity_Min_Fields = {
  __typename?: "tag_popularity_min_fields";
  count?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "tag_popularity" */
export type Tag_Popularity_Min_Order_By = {
  count?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** ordering options when selecting data from "tag_popularity" */
export type Tag_Popularity_Order_By = {
  count?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "tag_popularity" */
export enum Tag_Popularity_Select_Column {
  /** column name */
  Count = "count",
  /** column name */
  Type = "type",
}

/** aggregate stddev on columns */
export type Tag_Popularity_Stddev_Fields = {
  __typename?: "tag_popularity_stddev_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tag_popularity" */
export type Tag_Popularity_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Popularity_Stddev_Pop_Fields = {
  __typename?: "tag_popularity_stddev_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tag_popularity" */
export type Tag_Popularity_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Popularity_Stddev_Samp_Fields = {
  __typename?: "tag_popularity_stddev_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tag_popularity" */
export type Tag_Popularity_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Popularity_Sum_Fields = {
  __typename?: "tag_popularity_sum_fields";
  count?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "tag_popularity" */
export type Tag_Popularity_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Tag_Popularity_Var_Pop_Fields = {
  __typename?: "tag_popularity_var_pop_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tag_popularity" */
export type Tag_Popularity_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Popularity_Var_Samp_Fields = {
  __typename?: "tag_popularity_var_samp_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tag_popularity" */
export type Tag_Popularity_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Popularity_Variance_Fields = {
  __typename?: "tag_popularity_variance_fields";
  count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tag_popularity" */
export type Tag_Popularity_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamp"]>;
  _gt?: Maybe<Scalars["timestamp"]>;
  _gte?: Maybe<Scalars["timestamp"]>;
  _in?: Maybe<Array<Scalars["timestamp"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamp"]>;
  _lte?: Maybe<Scalars["timestamp"]>;
  _neq?: Maybe<Scalars["timestamp"]>;
  _nin?: Maybe<Array<Scalars["timestamp"]>>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};
