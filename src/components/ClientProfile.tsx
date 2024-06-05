import React, { useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

interface ClientProfileProps {
  profileData: {
    id: number;
    name: string;
    email: string;
    address?: string;
    contacts?: any[];
  } | null;
  updateProfile: (newProfile: any) => void;
}

const ClientProfile: React.FC<ClientProfileProps> = ({ profileData, updateProfile }) => {

  const [profile, setProfile] = useState<{
    id: number;
    name: string;
    email: string;
    address?: string;
    contacts?: any[]; 
  } | null>(profileData);

  useEffect(() => {
    setProfile(profileData);
  }, [profileData]);

  const columns = [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: profile?.contacts || [],
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div>
      <h2>Client Profile</h2>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Address: {profile.address || 'N/A'}</p>
          <h3>Contact Information</h3>
          <TableContainer component={Paper}>
            <Table {...getTableProps()}>
              <TableHead>
                {headerGroups.map(headerGroup => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ClientProfile;
