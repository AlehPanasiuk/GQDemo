import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { ResponseData } from './useIsolations';

interface Props {
  data: ResponseData
}

interface Column {
  field: string
  headerName: string
  width: number
  editable: boolean
}

const hiddenColumns = [
  'created',
  'isTemplateBased',
  'hasAdditionalLocations',
  'riskAssessmentLevel',
  'riskOfWork',
  'unlistedEquipment',
  'system',
  'plannedStartDate',
  'workingHoursFrom',
  'certificateReference',
  'watermarkResourceKey',
  'dueAt',
  'auditDate',
  'auditorFullName'
];

const SearchResults: React.FC<Props> = ({ data }) => {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    const newColumns = Object.keys(data.certificates[0])
      .filter((key) => !hiddenColumns.includes(key))
      .map((key) => ({
        field: key,
        headerName: key.toUpperCase(),
        width: 150,
        editable: true
      }));

    setColumns(newColumns);
  }, [data]);

  return (<Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data.certificates.map((cert, index) => ({
        id: index,
        ...cert
      }))}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>);
};

export default SearchResults;
