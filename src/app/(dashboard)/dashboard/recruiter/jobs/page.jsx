import { getCompanyJobs } from '@/lib/api/jobs';
import { Button, Chip, Tooltip } from '@heroui/react';
import { Table } from "@heroui/react";
import { Edit2, Eye, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Jobs = async () => {
    const companyId = 'company_123'
    const jobs = await getCompanyJobs(companyId);
    console.log(jobs);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'success';
            case 'inactive':
                return 'danger';
            default:
                return 'warning';
        }
    };

    return (
        <div>
            <Link href='/dashboard/recruiter/jobs/new'>
                <Button variant='primary' className="mb-10">Create New Job</Button>
            </Link>

            <div>
                <Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members" className="min-w-150">
                            <Table.Header>
                                <Table.Column isRowHeader>Job Title</Table.Column>
                                <Table.Column>Category</Table.Column>
                                <Table.Column>Location</Table.Column>
                                <Table.Column>Status</Table.Column>
                                <Table.Column>Action</Table.Column>
                            </Table.Header>
                            <Table.Body emptyContent={"No jobs found for this company"}>
                                {
                                    jobs.map((job) => (
                                        <Table.Row key={job._id?.$oid || job._id}>
                                            <Table.Cell>
                                                <div className="font-medium text-default-800">
                                                    {job.title}
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-sm capitalize font-medium">{job.jobType}</span>
                                                    <span className="text-xs text-default-400 capitalize">{job.category}</span>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <span className="text-sm text-default-600">
                                                    {job.isRemote ? "Remote" : job.location}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Chip
                                                    color={getStatusColor(job.status)}
                                                    size="sm"
                                                    variant="soft"
                                                    className="capitalize"
                                                >
                                                    {job.status || "Unknown"}
                                                </Chip>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <div className="relative flex items-center gap-2">
                                                    <Tooltip content="View Details">
                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            variant="light"
                                                            aria-label="View details"
                                                        >
                                                            <Eye className="text-default-400 w-4 h-4" />
                                                        </Button>
                                                    </Tooltip>
                                                    <Tooltip content="Edit Job">
                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            variant="light"
                                                            aria-label="Edit job"
                                                        >
                                                            <Edit2 className="text-default-400 w-4 h-4" />
                                                        </Button>
                                                    </Tooltip>
                                                    <Tooltip content="Delete Job">
                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            variant="light"
                                                            color="danger"
                                                            aria-label="Delete job"
                                                        >
                                                            <Trash2 className="text-danger w-4 h-4" />
                                                        </Button>
                                                    </Tooltip>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                    )}

                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>

        </div>
    );
};

export default Jobs;