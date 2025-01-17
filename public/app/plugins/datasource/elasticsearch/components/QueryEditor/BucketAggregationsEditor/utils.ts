import { InternalTimeZones, SelectableValue } from '@grafana/data';

import { defaultGeoHashPrecisionString } from '../../../queryDef';
import { BucketsConfiguration } from '../../../types';

import { defaultFilter } from './SettingsEditor/FiltersSettingsEditor/utils';

export const bucketAggregationConfig: BucketsConfiguration = {
  terms: {
    label: 'Terms',
    requiresField: true,
    defaultSettings: {
      min_doc_count: '1',
      size: '10',
      order: 'desc',
      orderBy: '_term',
    },
  },
  filters: {
    label: 'Filters',
    requiresField: false,
    defaultSettings: {
      filters: [defaultFilter()],
    },
  },
  geohash_grid: {
    label: 'Geo Hash Grid',
    requiresField: true,
    defaultSettings: {
      precision: defaultGeoHashPrecisionString,
    },
  },
  date_histogram: {
    label: 'Date Histogram (fixed interval)',
    requiresField: true,
    defaultSettings: {
      type: 'fixed_interval',
      interval: 'auto',
      min_doc_count: '0',
      trimEdges: '0',
      timeZone: InternalTimeZones.utc,
    },
  },
  calendar_date_histogram: {
    label: 'Date Histogram (calendar interval)',
    requiresField: true,
    defaultSettings: {
      type: 'calendar_interval',
      interval: '1d',
      min_doc_count: '0',
      trimEdges: '0',
      timeZone: InternalTimeZones.utc,
    },
  },


  histogram: {
    label: 'Histogram',
    requiresField: true,
    defaultSettings: {
      interval: '1000',
      min_doc_count: '0',
    },
  },
  nested: {
    label: 'Nested (experimental)',
    requiresField: true,
    defaultSettings: {},
  },
};

export const orderByOptions: Array<SelectableValue<string>> = [
  { label: 'Term value', value: '_term' },
  { label: 'Doc Count', value: '_count' },
];

export const orderOptions: Array<SelectableValue<string>> = [
  { label: 'Top', value: 'desc' },
  { label: 'Bottom', value: 'asc' },
];

export const sizeOptions = [
  { label: 'No limit', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '5', value: '5' },
  { label: '10', value: '10' },
  { label: '15', value: '15' },
  { label: '20', value: '20' },
];
